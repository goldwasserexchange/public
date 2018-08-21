const { is, when } = require('ramda');
const { fromRoot } = require('@goldwasserexchange/read-pkg-up-helpers');

const requireFromRootIfString = when(
  is(String),
  str => require(fromRoot(str)), // eslint-disable-line import/no-dynamic-require,global-require
);

module.exports = requireFromRootIfString;
