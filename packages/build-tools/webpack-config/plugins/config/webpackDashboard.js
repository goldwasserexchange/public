const DashboardPlugin = require('webpack-dashboard/plugin');
const { target } = require('../../webpackPkgConfig');

module.exports = target === 'web' && new DashboardPlugin();
