const path = require('path');

const { appendToPkg, ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

const getPath = configName => path.relative(process.cwd(), require.resolve(configName));
const ifAnyDepGetPath = (deps, configName) => ifAnyDep(deps, getPath(configName));

const addEsLintConfig = pkg => ({
  eslintConfig: Object.assign(
    {},
    pkg.eslintConfig || {},
    {
      extends: [
        getPath('@goldwasserexchange/eslint-config'),
        // TODO: readd redux saga
        ifAnyDepGetPath('react', '@goldwasserexchange/eslint-config-react'),
        ifAnyDepGetPath('react', 'eslint-config-airbnb/rules/react-a11y'),
        ifAnyDepGetPath('ramda', '@goldwasserexchange/eslint-config-ramda'),
        ifAnyDepGetPath('jest', '@goldwasserexchange/eslint-config-jest'),
      ].filter(Boolean),
    }
  ),
});

appendToPkg(addEsLintConfig);
