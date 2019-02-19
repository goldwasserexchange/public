const { ifAnyDep, getNodeEngine } = require('@goldwasserexchange/read-pkg-up-helpers');
const nodeSemver = require('@goldwasserexchange/node-semver-tools');

const getPresetEnv = require('./getPresetEnv');

const getPresets = (env, target) => [
  // ES features necessary for user's Node version
  getPresetEnv(env, target, nodeSemver.minSatisfying(getNodeEngine())),
  // Typescript
  require.resolve('@babel/preset-typescript'),
  // JSX, Flow
  ifAnyDep(
    'react',
    require.resolve('@babel/preset-react')
  ),
].filter(Boolean);

module.exports = getPresets;
