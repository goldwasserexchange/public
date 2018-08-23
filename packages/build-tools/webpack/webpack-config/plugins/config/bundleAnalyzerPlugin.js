const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = process.env.NODE_ENV === 'production' && new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  reportFilename: 'stats/dependenciesreport.html',
  openAnalyzer: false,
});
