const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    require.resolve('@goldwasserexchange/eslint-config-strict'),
    ifAnyDep('redux-saga', 'plugin:redux-saga/recommended'),
    ifAnyDep('react', require.resolve('@goldwasserexchange/eslint-config-react')),
    ifAnyDep('react', require.resolve('eslint-config-airbnb/rules/react-a11y')),
    ifAnyDep('ramda', require.resolve('@goldwasserexchange/eslint-config-ramda')),
    ifAnyDep('jest', require.resolve('@goldwasserexchange/eslint-config-jest')),
    require.resolve('@goldwasserexchange/eslint-config-unicorn'),
    require.resolve('@goldwasserexchange/eslint-config-typescript'),
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
};
