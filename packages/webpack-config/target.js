const webpackPkgConfig = require('./webpackPkgConfig');

module.exports = webpackPkgConfig.target || 'node';
