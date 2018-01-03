const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

const browsers = require('@goldwasserexchange/browserslist');

const node = (nodeVersion) => ({
  node: nodeVersion || 'current',
  uglify: true,
});

const browser = (env, target, nodeVersion) => (target === 'node' || (target === 'browser' && env === 'test'))
  ? node(nodeVersion)
  : {
    // Browserlist support
    browsers,
    // We currently minify with uglify
    // Remove after https://github.com/mishoo/UglifyJS2/issues/448
    uglify: true,
  };

const getTargets = env => ifAnyDep(
  'react',
  browser(env),
  node
);

module.exports = getTargets;
