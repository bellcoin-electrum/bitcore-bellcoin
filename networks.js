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
    hash: hex('00000000f04d3bdebf907f79b4b096a05d763ac890612202ff9c9cc685221617'),
    merkle_root: hex('daa610662c202dd51c892e6ff17ac1812a3ddcb998ec4923a3a315c409019739'),
    height: 0,
    nonce: 3632110353,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1540301756,
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
    hash: hex('00000000f04d3bdebf907f79b4b096a05d763ac890612202ff9c9cc685221617'),
    merkle_root: hex('daa610662c202dd51c892e6ff17ac1812a3ddcb998ec4923a3a315c409019739'),
    height: 0,
    nonce: 3632110353,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1540301756,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 18798
};
