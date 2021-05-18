const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b5067465750290e6e5ad2598601026470f67ee791bd6d014d2f9fab5ea4740e4');
const myWalletAddress = myKey.getPublic('hex');

let IvarCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 0);
tx1.signTransaction(myKey);
IvarCoin.addTransaction(tx1);

    
console.log('\n Starting the miner...');
IvarCoin.minePendingTransactions(myWalletAddress);
    
console.log('\nBalance of ivar is', IvarCoin.getBalanceOfAddress(myWalletAddress));
