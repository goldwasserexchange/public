const { isEmpty } = require('ramda');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackPkgConfig = require('../../webpackPkgConfig');

const copyList = webpackPkgConfig.copy || [];

module.exports = !isEmpty(copyList) && new CopyWebpackPlugin(copyList);
