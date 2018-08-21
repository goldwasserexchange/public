const stringArrayToRegexArray = require('./utils/stringArrayToRegexArray');
const { externals = [] } = require('./webpackPkgConfig');

module.exports = stringArrayToRegexArray(externals);
