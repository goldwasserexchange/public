const generateName = require('../utils/generateName');

module.exports = {
  test: /\.(jpe?g|png|gif)$/,
  use: [
    {
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: generateName(undefined),
      },
    },
    {
      loader: require.resolve('image-webpack-loader'),
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        optipng: {
          enabled: true,
          optimizationLevel: 7,
        },
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75,
        },
      },
    },
  ],
};

