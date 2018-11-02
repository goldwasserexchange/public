const path = require('path');

const { appendToPkg } = require('@goldwasserexchange/read-pkg-up-helpers');

const getPath = configName => path.relative(process.cwd(), require.resolve(configName));

const addEsLintConfig = pkg => ({
  eslintConfig: Object.assign(
    {},
    pkg.eslintConfig || {},
    {
      extends: [
        getPath('@goldwasserexchange/eslint-config'),
      ].filter(Boolean),
    }
  ),
});

appendToPkg(addEsLintConfig);
