const { manifest: { startUrls = {} } = {} } = require('../webpackPkgConfig');

module.exports = function getStartUrl() {
  return startUrls[process.env.STAGE || 'default'] || 'http://localhost:3000';
};
