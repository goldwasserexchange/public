// PostCSS plugins
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const styleVars = require('@goldwasserexchange/style-vars').default;
const mediaQueries = require('@goldwasserexchange/media-queries').default;

const browsers = require('@goldwasserexchange/browserslist');

module.exports = () => ({
  plugins: [
    postcssFocus(),
    cssnext({
      browsers,
      features: {
        customProperties: {
          variables: styleVars,
        },
        customMedia: {
          extensions: mediaQueries,
        },
      },
    }),
    lost(),
    postcssReporter({
      clearAllMessages: true,
    }),
  ],
});

