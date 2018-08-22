const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { target } = require('../../webpackPkgConfig');
const generateName = require('../../utils/generateName');

module.exports = target === 'web' && new ExtractCssChunks({
  filename: generateName('.css'),
  chunkFilename: generateName('.chunk.css'),
  hot: process.env.NODE_ENV === 'development',
});
