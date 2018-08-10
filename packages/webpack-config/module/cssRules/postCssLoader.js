module.exports = {
  loader: require.resolve('postcss-loader'),
  options: {
    config: {
      path: './postcss.config.js',
    },
  },
};
