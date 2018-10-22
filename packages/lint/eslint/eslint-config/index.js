const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const getOverridesFromLernaConfig = require('./getOverridesFromLerna');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('@goldwasserexchange/eslint-config-strict'),
    ifAnyDep('redux-saga', 'plugin:redux-saga/recommended'),
    ifAnyDep('react', require.resolve('@goldwasserexchange/eslint-config-react')),
    ifAnyDep('react', require.resolve('eslint-config-airbnb/rules/react-a11y')),
    ifAnyDep('ramda', require.resolve('@goldwasserexchange/eslint-config-ramda')),
    ifAnyDep('jest', require.resolve('@goldwasserexchange/eslint-config-jest')),
    require.resolve('@goldwasserexchange/eslint-config-unicorn'),
  ].filter(Boolean),
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    ifAnyDep('redux-saga', 'redux-saga'),
    ifAnyDep('react', 'jsx-a11y'),
  ].filter(Boolean),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: ifAnyDep('react', true, false),
    },
  },
  overrides: getOverridesFromLernaConfig({
    react: ['@goldwasserexchange/eslint-config-react', 'eslint-config-airbnb/rules/react-a11y'],
    ramda: '@goldwasserexchange/eslint-config-ramda',
    jest: '@goldwasserexchange/eslint-config-jest',
  }),
};
