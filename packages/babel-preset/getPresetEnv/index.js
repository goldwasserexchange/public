const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const getTargets = require('./getTargets');

const requirePresetEnv = require('./requirePresetEnv');

const node = 'commonjs';
const browser = (env, target) => (target === 'node' || (target === 'browser' && env === 'test')) ? 'commonjs' : false;

module.exports = (env, target) => [
  requirePresetEnv(env, target),
  {
    targets: getTargets(env, target),
    // Disable polyfill transforms
    useBuiltIns: false,
    // transform modules to CJS only on test
    modules: browser(env, target),
  },
];
