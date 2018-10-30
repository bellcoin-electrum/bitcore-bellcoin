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
