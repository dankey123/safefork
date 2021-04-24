
const SafeFork = artifacts.require("SafeFork");

module.exports = function(deployer, network, accounts) {
  
  deployer.deploy(SafeFork);
  print(accounts)

};
var SafeFork = artifacts.require("SafeFork");

module.exports = function(deployer, network, accounts) {

const name = "SafeFork"
const symbol = "SF"
const decimals = 18
const amount = 1000000
const tokens = web3.utils.toWei(amount.toString(), 'ether')

deployer.then(function() {
  return deployer.deploy(SafeFork, name, symbol, decimals, tokens).then(function() {
    });
  });
};