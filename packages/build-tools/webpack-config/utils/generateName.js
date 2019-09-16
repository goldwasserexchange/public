const chunkhash = (distributionHash) => (distributionHash
  ? '.[hash]'
  : '.[contenthash]');

const hash = (distributionHash) => (process.env.NODE_ENV === 'production'
  ? chunkhash(distributionHash)
  : '');

const generateName = (extension, distributionHash) => `static/[name]${hash(distributionHash)}${extension || '.[ext]'}`;

module.exports = generateName;
