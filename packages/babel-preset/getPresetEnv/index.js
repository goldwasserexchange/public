
const getTargets = require('./getTargets');

const requirePresetEnv = require('./requirePresetEnv');

module.exports = env => [
  requirePresetEnv(env),
  {
    targets: getTargets(env),
    // Disable polyfill transforms
    useBuiltIns: false,
    // transform modules to CJS only on test
    modules: env === 'test' ? 'commonjs' : false,
  },
];
