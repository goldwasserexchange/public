const { getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');
const {
  extensions = [
    '.mjs',
    '.js',
    '.jsx',
    '.react.js',
  ],
  mainFields = [
    'module',
    'jsnext:main',
    'browser',
    'main',
  ],
} = require('./webpackPkgConfig');

module.exports = {
  modules: [getPkgSrcDir(), 'node_modules'],
  extensions,
  mainFields,
};
