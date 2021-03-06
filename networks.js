var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('facebabe'),
  addressVersion: 25,
  privKeyVersion: 128,
  P2SHVersion: 85,
  bech32Prefix: 'bm1',
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000008f3b6bd10c2d03b06674a006b8d9731f6cb58179ef1eee008cee2209603'),
    merkle_root: hex('457e3d7e3c9a2af30454c0d1f65e8e3bd70dbbb53c7ced6ebc5c81af0194f450'),
    height: 0,
    nonce: 96906,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1534543066,
    bits: 507510783,  // 0x1e3fffff
  },
  dnsSeeds: [
    "seed.bellcoin.web4u.jp"
  ],
  defaultClientPort: 25253
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  bech32Prefix: 'bt1',
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('0000028cd51c8f4dc7458715c50534866c3eb18ebbe555d39ab3ba1cec1a3f59'),
    merkle_root: hex('457e3d7e3c9a2af30454c0d1f65e8e3bd70dbbb53c7ced6ebc5c81af0194f450'),
    height: 0,
    nonce: 149086,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1534543067,
    bits: 507510783,  // 0x1e3fffff
  },
  dnsSeeds: [
  ],
  defaultClientPort: 18798
};
