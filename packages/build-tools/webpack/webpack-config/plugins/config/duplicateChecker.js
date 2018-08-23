const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = new DuplicatePackageCheckerPlugin({
  verbose: true,
});

