const semver = require('semver');
const versions = require('./versions.json');

const minSatisfying = (range) => semver.minSatisfying(versions, range);

module.exports = {
  minSatisfying,
};
