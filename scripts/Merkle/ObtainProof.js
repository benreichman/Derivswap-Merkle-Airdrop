const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const fs = require("fs");

async function generateProof(user){
    // (1)
    const tree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("./tree/tree.json")));
    
    // (2)
    for (const [i, v] of tree.entries()) {
        if (v[0] === user) {
            // (3)
            const proof = tree.getProof(i);
            return(
                {
                    value: {
                        address:v[0],
                        amount : v[1]
                    },
                    proof:proof
                }
            )
        }
    }

}

module.exports = generateProof;
