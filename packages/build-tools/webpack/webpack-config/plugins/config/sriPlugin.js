const SriPlugin = require('webpack-subresource-integrity');
const { target } = require('../../webpackPkgConfig');

module.exports = target === 'web' && process.env.NODE_ENV === 'production' && new SriPlugin({
  hashFuncNames: ['sha256', 'sha384'],
});
