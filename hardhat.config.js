require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL=process.env.SEPOLIA_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
//Contract Address: 0x05F660E5eA3c638c348f4363D14d676F1983db65
