const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    require.resolve('@goldwasserexchange/eslint-config-import'),
    require.resolve('@goldwasserexchange/eslint-config-style'),
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...ifAnyDep('@aws-cdk/core', { 'no-new': 0 }, {}),
  },
};
