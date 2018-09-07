const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { target } = require('./webpackPkgConfig');
const {
  optimization: {
    splitChunks = {
      chunks: 'all',
    },
    runtimeChunk = target === 'web',
  } = {},
} = require('./webpackPkgConfig');

module.exports = process.env.NODE_ENV === 'production'
  ? Object.assign(
    {},
    {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: false,
          cache: true,
          sourceMap: false,
        }),
        target === 'web' && new OptimizeCSSAssetsPlugin(),
      ].filter(Boolean),
    },
    splitChunks
      ? {
        splitChunks,
      }
      : {},
    runtimeChunk == null
      ? {}
      : {
        runtimeChunk,
      }
  )
  : {
    splitChunks,
    runtimeChunk,
  };
