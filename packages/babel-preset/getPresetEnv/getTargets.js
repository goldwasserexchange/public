const browsers = require('@goldwasserexchange/browserslist');

const node = (nodeVersion) => ({
  node: nodeVersion.replace(/v/g, '') || 'current',
  uglify: false,
});

const getTargets = (env, target, nodeVersion) => (target === 'node' || (target === 'browser' && env === 'test'))
  ? node(nodeVersion)
  : {
    // Browserlist support
    browsers,
  };


module.exports = getTargets;
