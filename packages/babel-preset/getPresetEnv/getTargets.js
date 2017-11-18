const browsers = require('@goldwasserexchange/browserslist');

const getTargets = env => (
  (env === 'test')
    ? {
      node: 'current',
    }
    : {
      // Browserlist support
      browsers,
      // We currently minify with uglify
      // Remove after https://github.com/mishoo/UglifyJS2/issues/448
      uglify: true,
    }
);

module.exports = getTargets;
