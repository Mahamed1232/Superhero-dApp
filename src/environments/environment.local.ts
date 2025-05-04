declare const require;
const ABI = require('../../build/contracts/Superheroes.json');
export const environment = {
  local: true,
  production: false,
  networkID: 5777,
  RPCProvider: 'http://localhost:7545',
  RPCWSSProvider: 'ws://localhost:7545',
  ABI
};
