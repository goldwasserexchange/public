const path = require('path');

const { appendToPkg } = require('@goldwasserexchange/read-pkg-up-helpers');

const esLintConfigPath = path.relative(process.cwd(), require.resolve('@goldwasserexchange/eslint-config'));

const addEsLintConfig = pkg => ({ eslintConfig: Object.assign({}, pkg.eslintConfig || {}, { extends: esLintConfigPath }) });

appendToPkg(addEsLintConfig);
