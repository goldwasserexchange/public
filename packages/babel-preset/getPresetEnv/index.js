const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const getTargets = require('./getTargets');
const getBabelESTarget = require('../getBabelESTarget');
const requirePresetEnv = require('./requirePresetEnv');

const babelESTarget = getBabelESTarget();

const node = 'commonjs';
const modules = (env, target) => ((target === 'node' || (target === 'browser' && env === 'test')) && babelESTarget !== 'es') ? 'commonjs' : false;

module.exports = (env, target, nodeVersion) => [
  requirePresetEnv(env, target),
  {
    targets: getTargets(env, target, nodeVersion),
    // Disable polyfill transforms
    useBuiltIns: false,
    // transform modules to CJS only on test
    modules: modules(env, target),
  },
];
