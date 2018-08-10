const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin(Object.assign(
  {},
  {
    inject: true,
    env: process.env,
    template: 'app/index.ejs',
  },
  process.env.NODE_ENV === 'production'
    ? {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }
    : {}
));
