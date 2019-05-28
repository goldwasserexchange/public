const Jarvis = require('webpack-jarvis');
const { isNil } = require('ramda');
const { target } = require('../../webpackPkgConfig');

module.exports = target === 'web' && new Jarvis({
  port: 1337,
  watchOnly: isNil(process.env.JARVIS_WATCH) && process.env.JARVIS_WATCH !== '0' ? true : process.env.JARVIS_WATCH !== '0',
});
