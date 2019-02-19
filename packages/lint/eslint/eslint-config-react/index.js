module.exports = {
  parser: '@typescript-eslint/parser',
  extends: require.resolve('eslint-config-airbnb/rules/react'),
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
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
  },
};
