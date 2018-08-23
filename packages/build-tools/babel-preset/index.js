const getBabelEnv = require('./getBabelEnv');
const getBabelTarget = require('./getBabelTarget');
const getPlugins = require('./getPlugins');
const getPresets = require('./getPresets');

const env = getBabelEnv();
const target = getBabelTarget();

const plugins = getPlugins(env, target);

const presets = getPresets(env, target);

module.exports = () => ({
  presets,
  plugins,
});
