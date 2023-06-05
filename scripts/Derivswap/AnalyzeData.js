require('dotenv').config();
const { ethers } = require("ethers");
const PK = process.env.PK;
const INFURA_KEY = process.env.INFURA_KEY;
const provider = new ethers.providers.JsonRpcProvider(INFURA_KEY)
const fetchPrices = require('../Pyth/FetchCollateralPrices')
const { vault_abi, vault_address } = require("../ABI/vault")
const { orderbook_abi, orderbook_address } = require("../ABI/orderbook")
const orderbook = new ethers.Contract(orderbook_address, orderbook_abi, provider)
const vault = new ethers.Contract(vault_address, vault_abi, provider)
const wallet = new ethers.Wallet(PK, provider)

var TOTAL_WAGED = 0;

var collateral_prices = {
    native: undefined,
    usdt: undefined,
    usdc: undefined
}

async function fetch_collateral_prices() {
    const MATIC_PYTH_FEED_ID = '0xd2c2c1f2bba8e0964f9589e060c2ee97f5e19057267ac3284caef3bd50bd2cb5';
    const USDT_PYTH_FEED_ID = '0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588';
    const USDC_PYTH_FEED_ID = '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722';
    const collateral_feed_ids =
        [
            MATIC_PYTH_FEED_ID,
            USDT_PYTH_FEED_ID,
            USDC_PYTH_FEED_ID
        ];

    const prices = await fetchPrices(collateral_feed_ids);
    Object.keys(collateral_prices).forEach((key, index) => {
        collateral_prices[key] = parseFloat(prices[index].price.price * (10 ** prices[index].price.expo));
    });
}

async function fetch_taker_orders() {
    var end_found = false;
    var counter = 1;
    var taker_orders = [];
    while (end_found == false) {
        const taker_order = await orderbook.takerOrdersByID(counter)
        if (parseInt(taker_order.order_ID) != 0) {
            taker_orders.push(taker_order)
            counter++;
        }
        else {
            end_found = true;
        }
    }
    return (taker_orders);
}

async function align_takers_with_makers(taker_orders) {
    var match_orders = [];
    for (let i in taker_orders) {
        const maker_order = await orderbook.makerOrdersByID(taker_orders[i].makerOrder_ID);
        match_orders.push(
            {
                match: {
                    collateral: maker_order.collateral,
                    maker_order,
                    taker_order: taker_orders[i]
                }
            }
        )
    }
    return (match_orders)
}

async function calculate_activity(match_orders) {
    //address:undefined, waged:undefined
    var users_activity = [];
    for (let i in match_orders) {
        var multiplier;
        const total_maker_wagered = parseFloat(ethers.utils.formatEther(match_orders[i].match.maker_order.collateralPosted));
        const total_taker_wagered = parseFloat(ethers.utils.formatEther(match_orders[i].match.taker_order.ethPosted));
        switch (match_orders[i].match.maker_order.collateral) {
            case ethers.constants.AddressZero:
                multiplier = collateral_prices.native;
                break;
            case "0xAE91C872d378cFF75Ca099634487Bf94BF71CA94":
                multiplier = collateral_prices.usdt;
                break;
            case "0xb5896008024610447c3cf4d64D64b12AFF00Fd66":
                multiplier = collateral_prices.usdc;
                break;
        }
        TOTAL_WAGED += ((total_maker_wagered * multiplier) + (total_taker_wagered * multiplier));
        const makers_activity_index = users_activity.findIndex((activity) => activity.address === match_orders[i].match.maker_order.user);
        if (makers_activity_index != -1) {
            users_activity[makers_activity_index].waged += (total_maker_wagered * multiplier)
        }
        else {
            users_activity.push(
                {
                    address: match_orders[i].match.maker_order.user,
                    waged: total_maker_wagered * multiplier
                }
            )
        }

        const takers_activity_index = users_activity.findIndex((activity) => activity.address === match_orders[i].match.taker_order.user);
        if (takers_activity_index != -1) {
            users_activity[takers_activity_index].waged += (total_taker_wagered * multiplier)
        }
        else {
            users_activity.push(
                {
                    address: match_orders[i].match.taker_order.user,
                    waged: total_taker_wagered * multiplier
                }
            )
        }


    }
    return (users_activity);
}

async function analyzeData(TOKEN_ALLOCATION) {
    await fetch_collateral_prices();
    const taker_orders = await fetch_taker_orders();
    const match_orders = await align_takers_with_makers(taker_orders)
    const users_activity = await calculate_activity(match_orders);
    var return_array = [];
    for (let i in users_activity) {
        var users_allocation = parseInt((users_activity[i].waged / TOTAL_WAGED) * TOKEN_ALLOCATION)
        return_array.push([users_activity[i].address, users_allocation.toString()]);
    }
    return (return_array);
}


module.exports = analyzeData;
