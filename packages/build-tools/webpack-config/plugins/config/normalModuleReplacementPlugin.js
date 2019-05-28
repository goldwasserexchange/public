const { isEmpty } = require('ramda');
const webpack = require('webpack');
const { fromRoot } = require('@goldwasserexchange/read-pkg-up-helpers');
const { normalModuleReplacement: config = {} } = require('../../webpackPkgConfig');

module.exports = !isEmpty(config) && config.regex && config.replaceWith && new webpack.NormalModuleReplacementPlugin(
  new RegExp(config.regex),
  fromRoot(config.replaceWith)
);
