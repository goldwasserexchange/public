const path = require('path');
const { getPkgSrc, hasAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const { target } = require('./webpackPkgConfig');

module.exports = [
  (process.env.NODE_ENV === 'production' && target === 'web') && '@babel/polyfill',
  (process.env.NODE_ENV === 'production' && target === 'web') && 'whatwg-fetch',
  (process.env.NODE_ENV === 'development' && hasAnyDep('webpack-hot-middleware')) && 'eventsource-polyfill', // Necessary for hot reloading with IE
  (process.env.NODE_ENV === 'development' && hasAnyDep('webpack-hot-middleware')) && 'webpack-hot-middleware/client?reload=true',
  path.join(process.cwd(), getPkgSrc()), // Start with js/app.js
].filter(Boolean);
