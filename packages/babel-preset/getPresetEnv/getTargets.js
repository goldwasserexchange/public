const browsers = require('@goldwasserexchange/browserslist');

const node = (nodeVersion) => ({
  node: nodeVersion.replace(/v/g, '') || 'current',
  uglify: false,
});

const getTargets = (env, target, nodeVersion) => {
	const result = (target === 'node' || (target === 'browser' && env === 'test'))
	  ? node(nodeVersion)
	  : {
      // Browserlist support
      browsers,
	  };
	console.log(result);
	return result;
}

module.exports = getTargets;
