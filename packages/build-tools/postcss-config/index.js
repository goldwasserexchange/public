// PostCSS plugins
const lost = require('lost');
const postcssPresetEnv = require('postcss-preset-env');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const styleVars = require('@goldwasserexchange/style-vars').default;
const mediaQueries = require('@goldwasserexchange/media-queries').default;

const browsers = require('@goldwasserexchange/browserslist-config');
const addDashes = obj => Object.keys(obj).reduce(
  (acc, key) => ({
    ...acc,
    [`--${key}`]: obj[key],
  }),
  {}
);

module.exports = () => ({
  plugins: [
    postcssFocus(),
    postcssPresetEnv({
      browsers,
      stage: 2,
      features: {
        'custom-properties': {
          importFrom: [
            () => ({
              customProperties: addDashes(styleVars),
            }),
          ],
          preserve: false,
        },
        'custom-media-queries': {
          importFrom: [
            () => ({
              customMedia: addDashes(mediaQueries),
            }),
          ],
        },
      },
    }),
    lost(),
    postcssReporter({
      clearAllMessages: true,
    }),
  ],
});
