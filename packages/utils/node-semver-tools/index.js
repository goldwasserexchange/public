const semver = require('semver');
const versions = require('./versions');

const minSatisfying = range => semver.minSatisfying(versions, range);

module.exports = {
  minSatisfying,
};
