require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note soap solid gloom enroll flat topple'; 
let testAccounts = [
"0x929b3dfa10d2132ebe7e1f8ff6295b9567e9f4d3f9fb47e3207e0ad6f3d53b99",
"0x998735a50e6d424db7f94adc3e383e1bebb27c729a5b5b619f1294e9a7f8f8a3",
"0xe34583b0714e0a3f26a00edd4e2a0001cb20624ef2dfa23f8692330ba17af545",
"0x94fd4953748e4a249b3847cba0d633dece711e0c40b10c2932cbc510d1997745",
"0xfb12299cd8632c8435c86282a63ae4e760b1d86277fafec4962cd19e59e992a0",
"0x7d485d2124d93469079949d5ea9f221c64cb515c5f7df2fdb437570d9e645aa6",
"0xf10f4415c63557317bff907385122ef5807fa6cfa9ee280203bf999c4875c24d",
"0x55ec91f4602c6aecd553858217f7d1a7e49502bdbaf42d4d41622c98b99578e6",
"0x1941018be4ed14021649f4316f11fc86238248366707b64eced86aaba58cb68e",
"0x25dcd27761e9bd20174910cca455f14010b499ac9d48f7500e1442881634c63a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

