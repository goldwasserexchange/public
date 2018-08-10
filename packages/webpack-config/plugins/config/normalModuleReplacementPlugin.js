const { isEmpty } = require('ramda');
const webpack = require('webpack');
const webpackPkgConfig = require('../../webpackPkgConfig');
const { fromRoot } = require('@goldwasserexchange/read-pkg-up-helpers');

const config = webpackPkgConfig.normalModuleReplacement || {};

module.exports = !isEmpty(config) && config.regex && config.replaceWith && new webpack.NormalModuleReplacementPlugin(
  new RegExp(config.regex),
  fromRoot(config.replaceWith)
);
