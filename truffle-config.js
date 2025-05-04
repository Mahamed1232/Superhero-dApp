module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",    // Ganache default
      port: 7545,           // Ganache default port
      network_id: "5777"    // Match Ganache network ID
    }
  },
  compilers: {
    solc: {
      version: "0.5.0"      // Match Solidity version used in your contracts
    }
  }
};
