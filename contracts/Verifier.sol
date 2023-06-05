pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Verifier {
    bytes32 public root;
    mapping(bytes32=>bool) public leafClaimed;
    ERC20 public DRVS_Token;

    constructor(bytes32 _root, uint256 initialDRVSSupply) {
        root = _root;
        DRVS_Token = new DRVS("Derivswap Token", "DRVS", initialDRVSSupply);
    }

    function verify(
        bytes32[] memory proof,
        address addr,
        uint256 amount
    ) public returns(uint256 claimable_amount) {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr, amount))));
        require(leafClaimed[leaf] == false, "User has already claimed.");
        require(MerkleProof.verify(proof, root, leaf), "Invalid proof");
        claimable_amount = claim(leaf, amount);
        DRVS_Token.transfer(addr,claimable_amount);
    }

    function claim(bytes32 leaf, uint256 amount) internal returns(uint256){
        leafClaimed[leaf] = true;
        uint256 claimable_amount = amount * 10**18;
        return(claimable_amount);
    }
}

contract DRVS is ERC20 {
    constructor(string memory name, string memory symbol, uint256 supply) ERC20(name, symbol) {
        _mint(msg.sender, supply);
    }
}