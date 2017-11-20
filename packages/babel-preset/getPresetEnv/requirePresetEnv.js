const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const node = require('babel-preset-env').default;

const browser = env => (env !== 'test')
  ? require.resolve('babel-preset-env')
  : node;

const requirePresetEnv = env => ifAnyDep(
  'react',
  browser(env),
  node
);

module.exports = requirePresetEnv;
