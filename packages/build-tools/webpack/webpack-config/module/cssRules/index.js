const extractCssChunks = require('./extractCssChunks');
const cssLoader = require('./cssLoader');
const postCssLoader = require('./postCssLoader');

module.exports = {
  // Transform .css files with PostCSS and CSS-modules
  test: /\.css$/,
  use: [
    extractCssChunks,
    cssLoader,
    postCssLoader,
  ],
};
