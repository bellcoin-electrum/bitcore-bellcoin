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
    hash: hex('785d39acbca572caf7028f93d7afced2114efc5242ab7a67ecc6f434049e294b'),
    merkle_root: hex('a1e0b2df2da027843eed927910a0f6aebd3723f95a1bbcf4a4929952f55b01ce'),
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
