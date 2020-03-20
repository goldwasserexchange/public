const recommended = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: [
    '@typescript-eslint',
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
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      rules: { // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        ...recommended.rules,
        '@typescript-eslint/array-type': 'error',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'no-public',
            },
          },
        ],
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'comma',
              requireLast: true,
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      },
    },
  ],
};
