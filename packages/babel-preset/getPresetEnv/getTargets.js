const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

const browsers = require('@goldwasserexchange/browserslist');

const node = {
  node: 'current',
};

const browser = (env, target) => (target === 'node' || (target === 'browser' && env === 'test'))
  ? node
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
