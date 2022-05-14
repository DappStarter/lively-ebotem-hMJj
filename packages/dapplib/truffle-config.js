require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name razor meadow update grace hat army gentle'; 
let testAccounts = [
"0x8c999f43847b05c1e7d8c9ec123d7b9632fa9e49a2d7f356df9878339f5bbf8c",
"0x0b83e6e6080d1d7c7edf02e68990f3bd6941db01d787a589dbb1b20d4971ef15",
"0xe009cde22d20aa8eafd989a4186b9c0bfe8f66e6092b7a89f43d2e07d9a99952",
"0xa117bfe69ac839743f81bbb73e69e8f90d952606ab7923035a2f79df7f54165c",
"0xf645a68aa3ef05c86109fb6d98cf7b9e1be62338278e9ad5681f3a012b58a0c5",
"0x1ba8f8eb72f48183b28ca04b79795aac64013c473ae2c9c8896cc90c02fd3fdd",
"0x57371f4384aea2005b3317b31c75583ad42f068d0ee16cbe87f7d71d66947381",
"0x71741bab7e6d76d3a57b4d54a09c8e9624ea2dcba0fbb6ac391a5db43a16ae19",
"0xee62200c3c15ee15004ece4fa0b6d5b935bb201b622b2a8f80d8a33b83004322",
"0x43bc9cf8660771b486cef99e0635965f2dc393e90d25dfcbcb0570b4d088cd70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


