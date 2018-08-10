const webpack = require('webpack');

module.exports = new webpack.LoaderOptionsPlugin({
  options: {
    // 'context' needed for css-loader see
    // https://github.com/mxstbr/react-boilerplate/pull/1032#issuecomment-249821676
    context: __dirname,
  },
});
