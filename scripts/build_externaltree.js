const generateTree = require('./Merkle/BuildTree')
const values = [
    ["0x1111111111111111111111111111111111111111", "5000000000000000000"],
    ["0x2222222222222222222222222222222222222222", "2500000000000000000"]
  ];

async function main(){
    generateTree(values)
}

main();