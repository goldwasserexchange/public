const versions = require('./versions');
const semver = require('semver');

const minSatisfying = range => semver.minSatisfying(versions, range);

module.exports = {
  minSatisfying,
};
