const { pkg } = require('@goldwasserexchange/read-pkg-up-helpers');

const webpackPkgConfig = pkg.gewebpack || {};

module.exports = webpackPkgConfig;
