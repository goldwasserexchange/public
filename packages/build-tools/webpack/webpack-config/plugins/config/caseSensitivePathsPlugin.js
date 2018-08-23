const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = process.env.NODE_ENV === 'development' && new CaseSensitivePathsPlugin();
