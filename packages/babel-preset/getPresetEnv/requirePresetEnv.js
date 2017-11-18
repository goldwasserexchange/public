const requirePresetEnv = env => (
  (env === 'test')
    ? require('babel-preset-env').default // eslint-disable-line global-require
    : require.resolve('babel-preset-env')
);

module.exports = requirePresetEnv;
