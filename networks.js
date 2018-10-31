var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fc87bac0'),
  addressVersion: 76,
  privKeyVersion: 128,
  P2SHVersion: 28,
  bech32Prefix: 'xpc',
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('00000000a3719d37a87ebe48665cd68a98ae904e8bf7c404387faec221a795c3'),
    merkle_root: hex('42cf1e503818a7d8cb79d5bb3a9ae5848bc6c5d8b0873abe2b0f73c70c107e38'),
    height: 0,
    nonce: 3179019895,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1540301656,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 8798
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fc87bac0'),
  addressVersion: 138,
  privKeyVersion: 239,
  P2SHVersion: 138,
  bech32Prefix: 'txpc',
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('0000000062962E8C104B7C9509155A161F3F7A1F1E1EDFAD535CAA9A99189AD7'),
    merkle_root: hex('7F863DBE22EDE2E633E0A84B6C0C34BE1949B220AB3E296E00080B4CE695AC9B'),
    height: 0,
    nonce: 2327604116,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1540301756,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 18798
};
