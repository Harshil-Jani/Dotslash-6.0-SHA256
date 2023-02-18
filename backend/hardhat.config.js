// /**
// * @type import('hardhat/config').HardhatUserConfig
// */
// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");
// module.exports = {
//   solidity: {
//     version: '0.8.9',
//     defaultNetwork : 'polygon_testnet',
//     networks:{
//       hardhat: {},
//       polygon_testnet: {
//         url: 'https://rpc-mumbai.maticvigil.com',
//         accounts: [`0x${process.env.PRIVATE_KEY}`]
//       }
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   }
// };


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {  
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}