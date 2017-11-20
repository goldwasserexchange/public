const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const getTargets = require('./getTargets');

const requirePresetEnv = require('./requirePresetEnv');

const node = 'commonjs';
const browser = env => env === 'test' ? 'commonjs' : false;

module.exports = env => [
  requirePresetEnv(env),
  {
    targets: getTargets(env),
    // Disable polyfill transforms
    useBuiltIns: false,
    // transform modules to CJS only on test
    modules:ifAnyDep(
      'react',
      browser(env),
      node
    )
  },
];
