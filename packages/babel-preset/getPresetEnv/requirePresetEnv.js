const requirePresetEnv = (env, target) => ((target === 'node' || (target === 'browser' && env === 'test'))
  ? require.resolve('@babel/preset-env')
  : require('@babel/preset-env').default // eslint-disable-line global-require
);

module.exports = requirePresetEnv;
