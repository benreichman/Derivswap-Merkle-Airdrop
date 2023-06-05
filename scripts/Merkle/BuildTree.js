const { StandardMerkleTree } = require ( "@openzeppelin/merkle-tree" );
const fs = require( "fs" );

async function generateTree(values){

    const tree = StandardMerkleTree.of(values, ["address", "uint256"]);
    fs.writeFileSync("./tree/tree.json", JSON.stringify(tree.dump()));
    // console.log('Merkle Root:', tree.root);
    return(tree.root);
}


module.exports = generateTree;