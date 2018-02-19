const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

const requirePresetEnv = (env, target) => (target === 'node' || (target === 'browser' && env === 'test'))
  ? require.resolve('@babel/preset-env')
  : require('@babel/preset-env').default;

module.exports = requirePresetEnv;
