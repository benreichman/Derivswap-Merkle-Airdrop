const {EvmPriceServiceConnection} = require("@pythnetwork/pyth-evm-js")

const connection = new EvmPriceServiceConnection(
    "https://xc-testnet.pyth.network"
);

async function fetchPrices(priceIds){
    const prices = await connection.getLatestPriceFeeds(priceIds)
    return(prices)
}

module.exports = fetchPrices;
