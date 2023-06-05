const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");

const {anyValue} = require("@nomicfoundation/hardhat-chai-matchers/withArgs")
const { expect } = require("chai");
const {ethers} = require("hardhat")
const generateTree = require('../scripts/Merkle/BuildTree')
const analyzeData = require('../scripts/Derivswap/AnalyzeData');
const generateProof = require('../scripts//Merkle/ObtainProof')
const erc20_abi = require('../scripts/ABI/ERC20')
const TOKEN_ALLOCATION = 50000;

describe("Verifier", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployVerifier() {
    const [deployer, signer1, signer2] = await ethers.getSigners();
    const data = await analyzeData(TOKEN_ALLOCATION);
    const tree_root = await generateTree(data);

    const Verifier = await hre.ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy(tree_root, ethers.utils.parseEther(TOKEN_ALLOCATION.toString()));

    await verifier.deployed();

    const token_address = await verifier.DRVS_Token();
    return({verifier, tree_root, deployer, token_address});

  }

  describe("Deployment", function () {
    it("Should set the right tree root", async function () {
      // const { lock, unlockTime } = 
      const {verifier, tree_root,deployer } = await loadFixture(deployVerifier);

      expect(await verifier.root()).to.equal(tree_root);
    });
  });

  describe("Verification", async () => {
    it("Should generate and verify proof succesfully.", async () =>{
      const {verifier, tree_root, deployer} = await loadFixture(deployVerifier);
      const proof_values = await generateProof('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03')
      const verify_tx = await verifier.verify(proof_values.proof,proof_values.value.address, parseInt(proof_values.value.amount));
      await verify_tx.wait()
    })
    
    it("Should block invalid proof amount.", async () =>{
      const {verifier, tree_root, deployer} = await loadFixture(deployVerifier);
      const proof_values = await generateProof('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03')
      await expect( verifier.verify(proof_values.proof,proof_values.value.address, parseInt(proof_values.value.amount) - 1)).to.be.revertedWith('Invalid proof')
    })

    it("Should block already claimed leaf.", async () =>{
      const {verifier, tree_root, deployer} = await loadFixture(deployVerifier);
      const proof_values = await generateProof('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03')
      const verify_tx = await verifier.verify(proof_values.proof,proof_values.value.address, parseInt(proof_values.value.amount));
      await verify_tx.wait()
      await expect( verifier.verify(proof_values.proof,proof_values.value.address, parseInt(proof_values.value.amount))).to.be.revertedWith('User has already claimed.')
    })

    it("Should mint 50,000 DRVS tokens to the verifier contract.", async () =>{
      const {verifier, tree_root, deployer, token_address} = await loadFixture(deployVerifier);
      const token = new ethers.Contract(token_address,erc20_abi,deployer);
      const token_balance = await token.balanceOf(verifier.address)
      expect(token_balance).to.equal(ethers.utils.parseEther(TOKEN_ALLOCATION.toString()))
    })

    it("Should verify proof and successfully transfer airdrop.", async () =>{
      const {verifier, tree_root, deployer, token_address} = await loadFixture(deployVerifier);
      const proof_values = await generateProof('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03')
      const token = new ethers.Contract(token_address,erc20_abi,deployer);
      const token_balance_pre = await token.balanceOf('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03').then(res=>{
        return(parseFloat(ethers.utils.formatEther(res)));
      })
      const verify_tx = await verifier.verify(proof_values.proof,proof_values.value.address, parseInt(proof_values.value.amount));
      await verify_tx.wait()
      const token_balance_post = await token.balanceOf('0x0dD87AAcBBD23De9627c127e27DE5028607C3b03').then(res=>{
        return(parseFloat(ethers.utils.formatEther(res)))
      })
      expect(token_balance_post-token_balance_pre).to.equal(parseInt(proof_values.value.amount));

    })
  })

 
});
