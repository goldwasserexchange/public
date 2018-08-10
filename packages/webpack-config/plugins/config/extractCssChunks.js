const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const generateName = require('../../utils/generateName');

module.exports = new ExtractCssChunks({
  filename: generateName('.css'),
  chunkFilename: generateName('.chunk.css'),
  hot: process.env.NODE_ENV === 'development',
});
