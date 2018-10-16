const { sortOrder } = require('sort-package-json');

module.exports = {
  extends: require.resolve('npm-package-json-lint-config-default'),
  rules: {
    'require-homepage': 'error',
    'require-publishConfig': 'error',
    'require-repository': 'error',
    'require-license': 'error',
    'valid-values-license': ['error', [
      'MIT',
      'UNLICENSED',
    ]],
    'valid-values-name-scope': ['error', [
      '@goldwasserexchange',
    ]],
    'valid-values-publishConfig': ['error', [
      { access: 'public' },
    ]],
    'prefer-caret-version-dependencies': 'warning',
    'prefer-alphabetical-dependencies': 'error',
    'prefer-caret-version-devDependencies': 'warning',
    'prefer-alphabetical-devDependencies': 'error',
    'prefer-alphabetical-peerDependencies': 'error',
    'description-format': ['error', {
      requireCapitalFirstLetter: true,
    }],
    'prefer-property-order': ['error', sortOrder],
  },
};
