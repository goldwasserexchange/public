module.exports = {
  parser: '@typescript-eslint/parser',
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
        '**/*.js',
        '**/*.jsx',
      ],
      rules: {
        // Avoid `'React' was used before it was defined` when importing React
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        // Avoid loc error in VS Code
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
      },
    },
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: { // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/array-type': 'error',
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
