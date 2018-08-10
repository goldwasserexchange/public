const webpack = require('webpack');

module.exports = process.env.NODE_ENV === 'development' && new webpack.HotModuleReplacementPlugin();
