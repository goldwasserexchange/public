const generateName = require('../utils/generateName');

module.exports = {
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.ejs$/],
  options: {
    name: generateName(undefined, true),
  },
};
