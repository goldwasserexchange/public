/**
 * COMMON WEBPACK CONFIGURATION
 */
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const mode = require('./mode');
const entry = require('./entry');
const output = require('./output');
const optimization = require('./optimization');
const moduleConfig = require('./module');
const plugins = require('./plugins');
const resolve = require('./resolve');
const devtool = require('./devtool');
const performance = require('./performance');
const target = require('./target');
const externals = require('./externals');

const smp = new SpeedMeasurePlugin();

const config = {
  mode,
  bail: process.env.NODE_ENV === 'production',
  entry,
  output,
  optimization,
  module: moduleConfig,
  plugins,
  resolve,
  devtool,
  performance,
  target, // Make web variables accessible to webpack, e.g. window
  externals,
  stats: true,
};

module.exports = process.env.SPEED_MEASURE
  ? smp.wrap(config)
  : config;
