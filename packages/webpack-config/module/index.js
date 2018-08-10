const jsRules = require('./jsRules');
const cssRules = require('./cssRules');
const imageRules = require('./imageRules');
const htmlRules = require('./htmlRules');
const videoRules = require('./videoRules');
const fallbackRules = require('./fallbackRules');

module.exports = {
  strictExportPresence: true,
  rules: [
    { parser: { requireEnsure: false } },
    {
      oneOf: [
        imageRules,
        ...jsRules,
        cssRules,
        htmlRules,
        videoRules,
        fallbackRules,
      ],
    },
  ],
};
