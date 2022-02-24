const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const { concat } = require('ramda');
const getBabelTarget = require('../getBabelTarget');

const goldwasserExchangeUtilsEsTargets = {
  browser: 'browser',
  node: 'es',
};

const goldwasserExchangeUtilsTransform = (babelTarget) => ifAnyDep(
  '@goldwasserexchange/utils',
  {
    '@goldwasserexchange/utils': {
      transform: concat(`@goldwasserexchange/utils/${goldwasserExchangeUtilsEsTargets[babelTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

module.exports = () => {
  const babelTarget = getBabelTarget();
  return [
    require.resolve('babel-plugin-transform-imports'),
    {
      ...goldwasserExchangeUtilsTransform(babelTarget),
    },
  ];
};
