const {
  isEmpty, isNil, reduce, concat, map,
} = require('ramda');
const WorkboxPlugin = require('workbox-webpack-plugin');

const { workbox: workboxConfig = {} } = require('../../webpackPkgConfig');

const workBoxConfigInclude = workboxConfig.include || {};

const include = reduce(
  (acc, key) => concat(
    acc,
    key === 'regex'
      ? map(
        regexString => new RegExp(regexString),
        workBoxConfigInclude[key]
      )
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

module.exports = process.env.NODE_ENV === 'production' && !(isEmpty(workboxConfig) || isNil(workboxConfig)) && new WorkboxPlugin.InjectManifest(Object.assign(
  {},
  workboxConfig,
  {
    include,
  },
  dontCacheBustUrlsMatching,
));
