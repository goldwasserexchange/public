const { pkg: { gewebpack = {} } } = require('@goldwasserexchange/read-pkg-up-helpers');
const requireFromRootIfString = require('./utils/requireFromRootIfString');

module.exports = requireFromRootIfString(gewebpack);
