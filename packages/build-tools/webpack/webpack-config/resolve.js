const { getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = {
  modules: [getPkgSrcDir(), 'node_modules'],
  extensions: [
    '.mjs',
    '.js',
    '.jsx',
    '.react.js',
  ],
  mainFields: [
    'module',
    'jsnext:main',
    'browser',
    'main',
  ],
};
