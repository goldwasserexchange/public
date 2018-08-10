module.exports = {
  loader: require.resolve('postcss-loader'),
  options: {
    config: {
      path: 'internals/webpack/postcss.config.js',
    },
  },
};
