const getPresetEnv = require('./getPresetEnv');

const getPresets = env => [
  // ES features necessary for user's Node version
  getPresetEnv(env),
  // JSX, Flow
  require.resolve('babel-preset-react'),
];

module.exports = getPresets;
