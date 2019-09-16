const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { target } = require('./webpackPkgConfig');

module.exports = {

  ...(process.env.NODE_ENV === 'production'
    ? {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
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
    }
    : {}),
  ...(target === 'web'
    ? {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true,
    }
    : {}),
};
