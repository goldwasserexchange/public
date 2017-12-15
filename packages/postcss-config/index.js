// PostCSS plugins
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const styleVars = require('@goldwasserexchange/style-vars').default;
const mediaQueries = require('@goldwasserexchange/media-queries');

const browsers = require('@goldwasserexchange/browserslist');

module.exports = {
  plugins: [
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers, // ...based on this browser list
      features: {
        customProperties: {
          variables: styleVars,
        },
        customMedia: {
          extensions: mediaQueries,
          appendExtensions: true,
        },
      },
    }),
    lost(),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearAllMessages: true,
    }),
  ],
};

