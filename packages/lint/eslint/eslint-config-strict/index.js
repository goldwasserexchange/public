module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    require.resolve('@goldwasserexchange/eslint-config-base'),
    require.resolve('eslint-config-airbnb-base/rules/strict'),
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
};
