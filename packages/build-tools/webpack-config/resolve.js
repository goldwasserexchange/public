const { getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');
const {
  target,
  extensions = [
    '.mjs',
    '.js',
    '.jsx',
    '.react.js',
    '.json',
    '.ts',
  ],
  mainFields = [
    'module',
    'jsnext:main',
    target === 'web' && 'browser',
    'main',
  ].filter(Boolean),
} = require('./webpackPkgConfig');

module.exports = {
  modules: [getPkgSrcDir(), 'node_modules'],
  extensions,
  mainFields,
};
