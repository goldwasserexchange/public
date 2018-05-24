const getTargets = require('./getTargets');
const getBabelESTarget = require('../getBabelESTarget');
const requirePresetEnv = require('./requirePresetEnv');

const babelESTarget = getBabelESTarget();

module.exports = (env, target, nodeVersion) => [
  requirePresetEnv(env, target),
  {
    targets: getTargets(env, target, nodeVersion),
    // Disable polyfill transforms
    useBuiltIns: process.env.USE_BUILT_INS || false,
    // transform modules to CJS only on test
    modules: babelESTarget === 'es' ? false : babelESTarget,
  },
];
