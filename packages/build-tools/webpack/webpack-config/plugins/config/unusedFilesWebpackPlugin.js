const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const { getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');
const { ignoreUnusedFiles } = require('../../webpackPkgConfig');

module.exports = new UnusedFilesWebpackPlugin({
  patterns: [`${getPkgSrcDir()}/**/*.*`],
  globOptions: {
    ignore: ignoreUnusedFiles,
  },
});
