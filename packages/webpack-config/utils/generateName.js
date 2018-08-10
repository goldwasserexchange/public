const buildId = require('./buildId');

const chunkhash = distributionHash => (distributionHash
  ? '.[hash]'
  : '.[chunkhash]');

const hash = distributionHash => (process.env.NODE_ENV === 'production'
  ? chunkhash(distributionHash)
  : '');

const generateName = (extension, distributionHash) => `static/${buildId}[name]${hash(distributionHash)}${extension || '.[ext]'}`;

module.exports = generateName;
