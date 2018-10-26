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
    hash: hex('4B299E0434F4C6EC677AAB4252FC4E11D2CEAFD7938F02F7CA72A5BCAC395D78'),
    merkle_root: hex('CE015BF5529992A4F4BC1B5AF92337BDAEF6A0107992ED3E8427A02DDFB2E0A1'),
    height: 0,
    nonce: 0,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1540301856,
    bits: 545259519,
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
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 18798
};
