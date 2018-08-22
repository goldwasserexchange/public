const webpack = require('webpack');
const { target, defineEnv = [] } = require('../../webpackPkgConfig');
const { isEmpty } = require('ramda');

const definedEnv = defineEnv.reduce(
  (acc, item) => Object.assign({}, acc, { [item]: JSON.stringify(process.env[item]) }),
  {}
);

module.exports = target === 'web' && new webpack.DefinePlugin({
  'process.env': Object.assign(
    {},
    {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
    defineEnv && isEmpty(defineEnv)
      ? definedEnv
      : {}
  ),
});
