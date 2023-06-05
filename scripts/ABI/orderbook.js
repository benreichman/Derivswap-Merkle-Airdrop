const orderbook_address = "0x8EC19173A59c70960F2761cCCd2A051E3e336f00"
const orderbook_abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pyth",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Derivswap_Vault",
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
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "feedBidLiquidity",
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
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "feedBidLiquidityByAsset",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makerOrderCanceled",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makerOrderIDMatched",
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
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makerOrdersByFeedID",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makerOrdersByID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "order_ID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "collateral",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "collateralPosted",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "num_legs",
          "type": "uint256"
        },
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makersClosingPrices",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "feedID",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "int64",
              "name": "price",
              "type": "int64"
            },
            {
              "internalType": "uint64",
              "name": "conf",
              "type": "uint64"
            },
            {
              "internalType": "int32",
              "name": "expo",
              "type": "int32"
            },
            {
              "internalType": "uint256",
              "name": "publishTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct PythStructs.Price",
          "name": "close_price",
          "type": "tuple"
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makersLegs",
      "outputs": [
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "makersLockPrices",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "feedID",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "int64",
              "name": "price",
              "type": "int64"
            },
            {
              "internalType": "uint64",
              "name": "conf",
              "type": "uint64"
            },
            {
              "internalType": "int32",
              "name": "expo",
              "type": "int32"
            },
            {
              "internalType": "uint256",
              "name": "publishTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct PythStructs.Price",
          "name": "lock_price",
          "type": "tuple"
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
      "name": "makers_taker_ID",
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
      "name": "position_swap_router",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "takerOrderIDSettled",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "takerOrdersByID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "order_ID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ethPosted",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timeStampTaken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expiry",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "makerOrder_ID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "outlook",
          "type": "bool"
        },
        {
          "internalType": "int256",
          "name": "ratio",
          "type": "int256"
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
      "name": "takerSettleOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "makerOrderID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "takerOrderID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "maker",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "taker",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "winner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "settler",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "makerFees",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "settlerFees",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "winnerPayout",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "collateral",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timeStampSettled",
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userMakerOrders",
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
      "name": "userSettlerFeesEarned",
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userTakerOrders",
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
      "name": "vault",
      "outputs": [
        {
          "internalType": "contract Derivswap",
          "name": "",
          "type": "address"
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
          "name": "DRVS_VAULT_ADDRESS",
          "type": "address"
        }
      ],
      "name": "owner_set_hedgex",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_swapRouter",
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
          "internalType": "bytes",
          "name": "maker_info",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "legsEncoded",
          "type": "bytes"
        }
      ],
      "name": "orderbook_make_order",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "takerOrderInfo",
          "type": "bytes"
        },
        {
          "internalType": "bytes[]",
          "name": "priceUpdateData",
          "type": "bytes[]"
        }
      ],
      "name": "orderbook_take_order",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "settleInfo",
          "type": "bytes"
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
      "name": "orderbook_settle_order",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "order_ID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "collateral",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "collateralPosted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "num_legs",
              "type": "uint256"
            },
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
            }
          ],
          "internalType": "struct DRVSStructs.MakerOrder",
          "name": "_maker",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "order_ID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "ethPosted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStampTaken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "makerOrder_ID",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "outlook",
              "type": "bool"
            },
            {
              "internalType": "int256",
              "name": "ratio",
              "type": "int256"
            }
          ],
          "internalType": "struct DRVSStructs.TakerOrder",
          "name": "_taker",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "winnerAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "protocol_profit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "winning_payout",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maker_rebate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settler_fee",
              "type": "uint256"
            }
          ],
          "internalType": "struct DRVSStructs.Payout",
          "name": "_payout",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_makerOrderID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "orderbook_cancel_order",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "makerOrderID",
          "type": "uint256"
        }
      ],
      "name": "amt_required_to_take",
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
          "internalType": "bytes[]",
          "name": "priceUpdateData",
          "type": "bytes[]"
        }
      ],
      "name": "pyth_update_fee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "fee",
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
          "internalType": "uint256",
          "name": "_makerOrderID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "cancelMakerOrder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "maker_order_id",
          "type": "uint256"
        }
      ],
      "name": "calculate_taker_odds",
      "outputs": [
        {
          "internalType": "int256",
          "name": "opposite_odds256",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "swap_router_bid_accepted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "swap_router_ask_accepted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_orderType",
          "type": "uint256"
        }
      ],
      "name": "fetchUserOrders",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "order_ID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "collateral",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "collateralPosted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "num_legs",
              "type": "uint256"
            },
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
            }
          ],
          "internalType": "struct DRVSStructs.MakerOrder[]",
          "name": "maker_orders_returned",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "order_ID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "ethPosted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStampTaken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "makerOrder_ID",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "outlook",
              "type": "bool"
            },
            {
              "internalType": "int256",
              "name": "ratio",
              "type": "int256"
            }
          ],
          "internalType": "struct DRVSStructs.TakerOrder[]",
          "name": "taker_orders_returned",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "ids",
          "type": "bytes32[]"
        }
      ],
      "name": "fetchFeedLiquidity",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "ids",
          "type": "bytes32[]"
        }
      ],
      "name": "fetchFeedLiquidityAllCollateral",
      "outputs": [
        {
          "internalType": "uint256[][]",
          "name": "",
          "type": "uint256[][]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feedID",
          "type": "bytes32"
        }
      ],
      "name": "fetchMakerOrdersByFeedID",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "order_ID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "collateral",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "collateralPosted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "num_legs",
              "type": "uint256"
            },
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
            }
          ],
          "internalType": "struct DRVSStructs.MakerOrder[]",
          "name": "",
          "type": "tuple[]"
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
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_orderType",
          "type": "uint256"
        }
      ],
      "name": "getUserOrdersLength",
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
          "internalType": "bytes32",
          "name": "feedID",
          "type": "bytes32"
        }
      ],
      "name": "makerOrdersByFeedIDLength",
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
    }
  ]

module.exports = {
    orderbook_abi,
    orderbook_address
}