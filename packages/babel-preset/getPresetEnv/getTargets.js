const browsers = require('@goldwasserexchange/browserslist');

const node = nodeVersion => ({
  node: nodeVersion ? nodeVersion.replace(/v/g, '') : 'current',
});

const getTargets = (env, target, nodeVersion) => ((target === 'node' || (target === 'browser' && env === 'test'))
  ? node(nodeVersion)
  : {
    // Browserlist support
    browsers,
  });


module.exports = getTargets;
