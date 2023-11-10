const { expect } = require("chai");
const { ethers } = require("ethers");
/*   
const { ethers } = require("hardhat"); 

describe("ERC1155", function () {

  let erc1155;
  let owner;

  beforeEach(async function () {

    // Get contract factory from source
    const ERC1155Contract = await ethers.getContractFactory("MyERC1155");

    // Deploy a new instance
    erc1155 = await ERC1155Contract.deploy();

    [owner] = await ethers.getSigners();

  });

  // Tests...

});


*/

// Import compiled contract artifacts 
const MyERC1155 = artifacts.require("MyERC1155");

describe("MyERC1155", function () {

  let erc1155;
  let owner, account1, account2;

  beforeEach(async function () {
    // Get contract and buyer/seller accounts
    [owner, account1, account2] = await ethers.getSigners();

    // Deploy contract
    erc1155 = await MyERC1155.deploy();    
  });

  describe("mint", function () {

    it("should mint token", async function () {
      await erc1155.mint(account1.address, 1, 10);
      
      // Check balance
      expect(await erc1155.balanceOf(account1.address, 1)).to.equal(10);
    });

  });
  
  describe("burn", function () {

    beforeEach(async function () {
      await erc1155.mint(account1.address, 1, 10); 
    });

    it("should burn token", async function () {
      await erc1155.burn(account1.address, 1, 5);

      // Check balance  
      expect(await erc1155.balanceOf(account1.address, 1)).to.equal(5); 
    });

  });
  
});
