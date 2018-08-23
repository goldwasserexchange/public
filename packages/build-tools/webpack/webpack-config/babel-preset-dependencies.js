const getBabelEnv = require('@goldwasserexchange/babel-preset/getBabelEnv');
const getBabelTarget = require('@goldwasserexchange/babel-preset/getBabelTarget');
const getPresetEnv = require('@goldwasserexchange/babel-preset/getPresetEnv');
const { getNodeEngine } = require('@goldwasserexchange/read-pkg-up-helpers');
const nodeSemver = require('@goldwasserexchange/node-semver-tools');

const env = getBabelEnv();
const target = getBabelTarget();

module.exports = () => ({
  presets: [
    getPresetEnv(env, target, nodeSemver.minSatisfying(getNodeEngine())),
  ],
});
