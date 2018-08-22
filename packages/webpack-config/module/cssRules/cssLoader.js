module.exports = {
  loader: require.resolve('css-loader'),
  options: Object.assign(
    {},
    {
      importLoaders: 1,
      modules: true,
    },
    process.env.NODE_ENV === 'development'
      ? {
        sourceMap: true,
        localIdentName: '[local]__[path][name]__[hash:base64:5]',
      }
      : {},
    process.env.NODE_ENV === 'production'
      ? {
        camelCase: true,
        minimize: true,
      }
      : {},
  ),
};

