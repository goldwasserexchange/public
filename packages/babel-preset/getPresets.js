const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

const getPresetEnv = require('./getPresetEnv');

const getPresets = (env, target) => [
  // ES features necessary for user's Node version
  getPresetEnv(env, target),
  // JSX, Flow
  ifAnyDep(
    'react',
    require.resolve('babel-preset-react')
  ),
].filter(Boolean);

module.exports = getPresets;
