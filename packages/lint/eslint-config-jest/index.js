module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'jest',
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
    'jest/no-disabled-tests': 'off',
    'jest/no-focused-tests': 'off',
    'jest/no-identical-title': 'off',
    'jest/no-large-snapshots': 'off',
    'jest/prefer-to-have-length': 'off',
    'jest/valid-expect': 'off',
  },
  overrides: [
    {
      env: {
        'jest/globals': true,
      },
      files: [
        '**/*.test.js',
        '**/__mocks__/*.js',
        '**/*.test.ts',
        '**/__mocks__/*.ts',
      ],
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-large-snapshots': 'warn',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
        'no-underscore-dangle': 0,
      },
    },
  ],
};
