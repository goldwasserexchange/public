module.exports = {
  loader: require.resolve('postcss-loader'),
  options: {
    config: {
      path: require.resolve('@goldwasserexchange/webpack-config/postcss.config.js'),
    },
  },
};
