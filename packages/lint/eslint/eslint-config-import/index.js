module.exports = {
  parser: '@typescript-eslint/parser',
  extends: require.resolve('eslint-config-airbnb-base/rules/imports'),
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
    'import',
  ],
  rules: {
    'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
        ],
      },
    },
  },
};
