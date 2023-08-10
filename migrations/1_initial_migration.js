// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Migrations");
// eslint-disable-next-line no-undef
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0xA9Ea72d0d9Eb37034275007991F3B0609bd94d8a',
    '1000000000000000000000'
  )
};
