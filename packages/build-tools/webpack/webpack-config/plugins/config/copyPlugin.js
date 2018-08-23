const { isEmpty } = require('ramda');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { copy: copyList = [] } = require('../../webpackPkgConfig');

module.exports = !isEmpty(copyList) && new CopyWebpackPlugin(copyList);
