const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const R = require('ramda');
const getBabelESTarget = require('../getBabelESTarget');

const goldwasserExchangeUtilsEsTargets = {
  es: 'es',
  commonjs: 'lib'
};

const goldwasserExchangeUtilsTransform = (babelESTarget) => ifAnyDep(
  '@goldwasserexchange/utils',
  {
    '@goldwasserexchange/utils': {
      transform: R.concat(`@goldwasserexchange/utils/${goldwasserExchangeUtilsEsTargets[babelESTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

const reactRouterTargets = {
  es: 'es6',
  commonjs: 'lib'
};

const reactRouterTransform = (babelESTarget) => ifAnyDep(
  'react-router',
  {
    'react-router': {
      transform: R.concat(`react-router/${reactRouterTargets[babelESTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

const ramdaTargets = {
  es: 'es',
  commonjs: 'src'
};

const ramdaTransform = (babelESTarget) => ifAnyDep(
  'ramda',
  {
    ramda: {
      transform: R.concat(`ramda/${ramdaTargets[babelESTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

module.exports = () => {
  const babelESTarget = getBabelESTarget(true);
  return [
    require.resolve('babel-plugin-transform-imports'),
    Object.assign(
      {},
      goldwasserExchangeUtilsTransform(babelESTarget),
      reactRouterTransform(babelESTarget),
      ramdaTransform(babelESTarget),
    )
  ];
};
