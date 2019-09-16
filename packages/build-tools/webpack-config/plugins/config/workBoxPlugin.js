const {
  isEmpty, isNil, reduce, concat,
} = require('ramda');
const WorkboxPlugin = require('workbox-webpack-plugin');

const stringArrayToRegexArray = require('../../utils/stringArrayToRegexArray');
const { target, workbox: workboxConfig = {} } = require('../../webpackPkgConfig');

const workBoxConfigInclude = workboxConfig.include || {};

const include = reduce(
  (acc, key) => concat(
    acc,
    key === 'regex'
      ? stringArrayToRegexArray(workBoxConfigInclude[key])
      : workBoxConfigInclude[key]
  ),
  [],
  Object.keys(workBoxConfigInclude)
);

const dontCacheBustUrlsMatching = {
  dontCacheBustUrlsMatching: workboxConfig.dontCacheBustUrlsMatching
    ? new RegExp(workboxConfig.dontCacheBustUrlsMatching)
    : null,
};

module.exports = target === 'web' && process.env.NODE_ENV === 'production' && !(isEmpty(workboxConfig) || isNil(workboxConfig)) && new WorkboxPlugin.InjectManifest({

  ...workboxConfig,
  include,
  ...dontCacheBustUrlsMatching,
});
