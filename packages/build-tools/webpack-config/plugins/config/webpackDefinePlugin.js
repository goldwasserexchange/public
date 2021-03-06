const webpack = require('webpack');
const { isEmpty } = require('ramda');
const { target, defineEnv = [] } = require('../../webpackPkgConfig');

const definedEnv = defineEnv.reduce(
  (acc, item) => ({ ...acc, [item]: JSON.stringify(process.env[item]) }),
  {}
);

module.exports = target === 'web' && new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    ...(defineEnv && !isEmpty(defineEnv)
      ? definedEnv
      : {}),
  },
});
