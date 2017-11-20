const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

const getPresetEnv = require('./getPresetEnv');

const getPresets = env => [
  // ES features necessary for user's Node version
  getPresetEnv(env),
  // JSX, Flow
  ifAnyDep(
    'react',
    require.resolve('babel-preset-react')
  ),
];

module.exports = getPresets;
