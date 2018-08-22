const { isEmpty } = require('ramda');
const ConcatPlugin = require('webpack-concat-plugin');
const generateName = require('../../utils/generateName');
const { concat: concatBaseObject = {} } = require('../../webpackPkgConfig');

const concatDefaultConfig = concatBaseObject.default || [];
const concatStageConfig = concatBaseObject[process.env.STAGE || 'dev'] || [];
const filesToConcat = [
  ...concatDefaultConfig,
  ...concatStageConfig,
];

module.exports = !isEmpty(filesToConcat) && new ConcatPlugin({
  uglify: true,
  name: 'concat',
  fileName: generateName('.js', true),
  filesToConcat,
  injectType: 'none',
});
