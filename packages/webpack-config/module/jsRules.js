const { getPkgSrcDir, fromRoot } = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = [
  {
    test: /\.(js|jsx|mjs)$/,
    include: fromRoot(getPkgSrcDir()),
    exclude: /node_modules/,
    use: {
      loader: require.resolve('babel-loader'),
      options: {
        cacheDirectory: process.env.NODE_ENV !== 'production',
        compact: process.env.NODE_ENV === 'production',
        highlightCode: true,
      },
    },
  }, {
    test: /\.js$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          compact: false,
          presets: [
            require.resolve('../babel-preset-dependencies'),
          ],
          cacheDirectory: process.env.NODE_ENV !== 'production',
          highlightCode: true,
        },
      },
    ],
  },
];
