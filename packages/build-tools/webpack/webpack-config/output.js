const path = require('path');
const generateName = require('./utils/generateName');
const {
  getPkgMainDir,
  getPkgModuleDir,
  getPkgBrowserDir,
} = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = { // Compile into js/build.js
  path: path.resolve(process.cwd(), getPkgMainDir() || getPkgModuleDir() || getPkgBrowserDir() || 'build'),
  publicPath: process.env.PUBLIC_URL || '/',
  filename: generateName('.js'),
  chunkFilename: generateName('.chunk.js'),
};
