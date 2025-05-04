declare const require;
const ABI = require('../../build/contracts/Superheroes.json');

export const environment = {
  localRemoteProvider: true,
  production: false,
  networkID: 5777, // ✅ Ganache default network ID
  RPCProvider: 'http://127.0.0.1:7545', // ✅ Ganache RPC URL
  RPCWSSProvider: 'ws://127.0.0.1:7545', // ✅ Ganache WebSocket URL (optional)
  contractAddress: '0xE006bB4B846ebC2c9F2A7E69441b74691A168727', // 🔁 Replace with your deployed address
  ABI: ABI.abi
};
