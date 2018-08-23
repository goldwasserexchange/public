const { fromRoot } = require('@goldwasserexchange/read-pkg-up-helpers');

const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = process.env.NODE_ENV === 'development' && new WatchMissingNodeModulesPlugin(fromRoot('node_modules'));
