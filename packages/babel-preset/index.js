const getBabelEnv = require('./getBabelEnv');
const getPlugins = require('./getPlugins');
const getPresets = require('./getPresets');

const env = getBabelEnv();

const plugins = getPlugins(env);

const presets = getPresets(env);

module.exports = {
  presets,
  plugins,
};
