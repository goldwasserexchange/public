const path = require('path');
const { getPkgSrc, hasAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const webpackPkgConfig = require('./webpackPkgConfig');

module.exports = [
  (process.env.NODE_ENV === 'production' && webpackPkgConfig.target === 'web') && '@babel/polyfill',
  'whatwg-fetch',
  (process.env.NODE_ENV === 'development' && hasAnyDep('webpack-hot-middleware')) && 'eventsource-polyfill', // Necessary for hot reloading with IE
  (process.env.NODE_ENV === 'development' && hasAnyDep('webpack-hot-middleware')) && 'webpack-hot-middleware/client?reload=true',

  path.join(process.cwd(), getPkgSrc()), // Start with js/app.js
].filter(Boolean);
