const { pkg } = require('@goldwasserexchange/read-pkg-up-helpers');

const webpackPkgConfig = pkg.gwwebpack || {};

module.exports = webpackPkgConfig;
