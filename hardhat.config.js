require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: "https://polygon-amoy.g.alchemy.com/v2/GpwhgquWDfuBhbqfEaDtfq6QnP4fahQf", // Alchemy RPC URL for Mumbai
      accounts: ["5797c4e22b02c079ddb5a3b6978f4e56058ce3a210f0d17946549d497dec749d"] // Your private key
    }
  },
  etherscan: {
    apiKey: "X34M51E4E8H2W5UFFVIC67QEEFQF8XNEP9" // Your Etherscan API key
  },
  customChains: [
    {
      network: "mumbai",
      chainId: 80001,
      urls: {
        apiURL: "https://api-testnet.polygonscan.com/api",
        browserURL: "https://mumbai.polygonscan.com"
      }
    }
  ]
};
