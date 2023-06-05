const generateProof = require('./Merkle/ObtainProof')
async function main(){
    await generateProof('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03');
}

main();