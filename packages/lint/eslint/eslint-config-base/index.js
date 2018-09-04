module.exports = {
  parser: 'babel-eslint',
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
};
