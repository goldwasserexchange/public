const HtmlWebpackPlugin = require('html-webpack-plugin');
const { fromRoot, getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');
const { target, htmlTemplate } = require('../../webpackPkgConfig');

module.exports = target === 'web' && new HtmlWebpackPlugin(Object.assign(
  {},
  {
    inject: true,
    env: process.env,
    template: htmlTemplate || `${fromRoot(getPkgSrcDir())}/index.ejs`,
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
