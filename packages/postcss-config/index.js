// PostCSS plugins
const lost = require('lost');
const postcssPresetEnv = require('postcss-preset-env');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const styleVars = require('@goldwasserexchange/style-vars').default;
const mediaQueries = require('@goldwasserexchange/media-queries').default;

const browsers = require('@goldwasserexchange/browserslist');

module.exports = () => ({
  plugins: [
    postcssFocus(),
    postcssPresetEnv({
      browsers,
      stage: 2,
      features: {
        'custom-properties': {
          variables: styleVars,
        },
        'custom-media-queries': {
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

