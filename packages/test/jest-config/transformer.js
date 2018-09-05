const babelJest = require('babel-jest');
const babelPreset = require('@goldwasserexchange/babel-preset');

module.exports = babelJest.createTransformer(babelPreset());
