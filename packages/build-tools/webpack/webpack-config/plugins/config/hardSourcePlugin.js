const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = process.env.NODE_ENV === 'development' && new HardSourceWebpackPlugin();
