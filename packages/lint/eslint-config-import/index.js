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
    'import/prefer-default-export': 0, // TODO: enforce later with import/no-default-export, see https://github.com/goldwasserexchange/public/issues/139
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
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
