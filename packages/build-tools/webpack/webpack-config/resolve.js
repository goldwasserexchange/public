const { getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = {
  modules: [getPkgSrcDir(), 'node_modules'],
  extensions: [
    '.js',
    '.jsx',
    '.react.js',
    '.mjs',
  ],
  mainFields: [
    'module',
    'jsnext:main',
    'browser',
    'main',
  ],
};
