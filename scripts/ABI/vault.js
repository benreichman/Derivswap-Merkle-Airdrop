const vault_abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_liquidityManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_hedgexTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_derivswap_orderbook",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_swapRouter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_weth",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_uniFactory",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "InitialLiquidityProvided",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_maker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_maker_order_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_collateral",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "NewMakerOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Received",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_settler",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_taker_order_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_maker_order_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_winner_payout",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_settler_fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_maker_rebate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_protocol_p",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_collateral_profit",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "Settled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "SwapFailure",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amtInput",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amtOutput",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "SwappedForHedgex",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_taker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_maker_order_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lockUpEnds",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "Taken",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DRVS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "WETH9",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "derivswapLiqManager",
      "outputs": [
        {
          "internalType": "contract IderivswapLiqManager",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "derivswapLiqManagerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "derivswap_orderbook",
      "outputs": [
        {
          "internalType": "contract Orderbook",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "drvs",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "earnBox",
      "outputs": [
        {
          "internalType": "contract IEarnBox",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "earnBoxAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "earn_box_fees_injected",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "earn_box_fees_injected_multi",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "eth_swapped_for_drvs",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "initialLiquidityProvided",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "initialLiquidityPulled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "orderbook_address",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "pool_address",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "positionSwapRouter",
      "outputs": [
        {
          "internalType": "contract IPositionSwapRouter",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "protocol_earnings_by_asset",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "protocol_earnings_native",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "swapRouter",
      "outputs": [
        {
          "internalType": "contract ISwapRouter",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "unifactory",
      "outputs": [
        {
          "internalType": "contract IUniswapV3Factory",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "whitelisted_coins",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelisted_collateral",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "stateMutability": "payable",
      "type": "receive",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_earn_box",
          "type": "address"
        }
      ],
      "name": "owner_set_earn_box",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_swap_router",
          "type": "address"
        }
      ],
      "name": "owner_set_position_swap_router",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "owner_whitelist_collateral",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocol_claim_quarter_of_excess_profit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "expiryType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expiryValue",
          "type": "uint256"
        },
        {
          "internalType": "int64",
          "name": "ratio",
          "type": "int64"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "feedID",
              "type": "bytes32"
            },
            {
              "internalType": "bool",
              "name": "outlook",
              "type": "bool"
            },
            {
              "internalType": "int64",
              "name": "priceTarget",
              "type": "int64"
            },
            {
              "components": [
                {
                  "internalType": "int64",
                  "name": "lowerBound",
                  "type": "int64"
                },
                {
                  "internalType": "int64",
                  "name": "upperBound",
                  "type": "int64"
                }
              ],
              "internalType": "struct DRVSStructs.PriceThreshold",
              "name": "threshold",
              "type": "tuple"
            }
          ],
          "internalType": "struct DRVSStructs.Leg[]",
          "name": "legs",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "collateral",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "alternative_collateral_amount",
          "type": "uint256"
        }
      ],
      "name": "makeOrder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "makerOrderID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "take_amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes[]",
          "name": "priceUpdateData",
          "type": "bytes[]"
        }
      ],
      "name": "takeOrder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "takerOrder_ID",
          "type": "uint256"
        },
        {
          "internalType": "bytes[]",
          "name": "priceUpdateData",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "maker_leg_feed_ids",
          "type": "bytes32[]"
        }
      ],
      "name": "settleOrder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maker_order_id",
          "type": "uint256"
        }
      ],
      "name": "cancelOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "swap_for_drvs",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "whitelisted_collateral_list",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "ownerpull",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const vault_address="0x7661EA4e9FBb9F7C00D888c69E363633D60203b3"
module.exports = {
    vault_abi,
    vault_address
}