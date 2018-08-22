const path = require('path');

const { appendToPkg, getPkgSrcDir } = require('@goldwasserexchange/read-pkg-up-helpers');

const esLintConfigPath = path.relative(process.cwd(), require.resolve('@goldwasserexchange/eslint-config'));

const addEsLintConfig = pkg => ({
  eslintConfig: Object.assign(
    {},
    pkg.eslintConfig || {},
    {
      extends: esLintConfigPath,
      settings: {
        'import/resolver': {
          'babel-plugin-root-import': {
            rootPathPrefix: '#',
            rootPathSuffix: getPkgSrcDir(),
          },
        },
      },
    }
  ),
});

appendToPkg(addEsLintConfig);
