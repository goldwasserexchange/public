const htmlWebpackPlugin = require('./config/htmlWebpackPlugin');
const bundleAnalyzerPlugin = require('./config/bundleAnalyzerPlugin');
const statsWriterPlugin = require('./config/statsWriterPlugin');
const workBoxPlugin = require('./config/workBoxPlugin');
const hardSourcePlugin = require('./config/hardSourcePlugin');
const hotModuleReplacementPlugin = require('./config/hotModuleReplacementPlugin');
const extractCssChunks = require('./config/extractCssChunks');
const webpackDefinePlugin = require('./config/webpackDefinePlugin');
const loaderOptionPlugin = require('./config/loaderOptionPlugin');
const unusedFilesWebpackPlugin = require('./config/unusedFilesWebpackPlugin');
const normalModuleReplacementPlugin = require('./config/normalModuleReplacementPlugin');
const copyPlugin = require('./config/copyPlugin');
const concatPlugin = require('./config/concatPlugin');
const caseSensitivePathsPlugin = require('./config/caseSensitivePathsPlugin');
const watchMissingNodeModulesPlugin = require('./config/watchMissingNodeModulesPlugin');
const Jarvis = require('./config/jarvis');
const friendlyErrors = require('./config/friendlyErrors');
const duplicateChecker = require('./config/duplicateChecker');
const pwaManifest = require('./config/pwaManifest');
const webpackDashboard = require('./config/webpackDashboard');

module.exports = [
  webpackDashboard,
  duplicateChecker,
  friendlyErrors,
  Jarvis,
  htmlWebpackPlugin,
  pwaManifest,
  bundleAnalyzerPlugin,
  statsWriterPlugin,
  workBoxPlugin,
  hardSourcePlugin,
  hotModuleReplacementPlugin,
  caseSensitivePathsPlugin,
  watchMissingNodeModulesPlugin,
  extractCssChunks,
  webpackDefinePlugin,
  loaderOptionPlugin,
  unusedFilesWebpackPlugin,
  normalModuleReplacementPlugin,
  copyPlugin,
  concatPlugin,
].filter(Boolean);
