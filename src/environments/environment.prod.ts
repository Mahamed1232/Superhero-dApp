declare const require;
const ABI = require('../../build/contracts/Superheroes.json');
export const environment = {
  production: true,
  networkID: 5777,
  RPCProvider: 'http://localhost:7545',
  RPCWSSProvider: 'ws://localhost:7545',
  ABI
};
