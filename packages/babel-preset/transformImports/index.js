const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const R = require('ramda');
const getBabelESTarget = require('../getBabelESTarget');
const getBabelTarget = require('../getBabelTarget');

const goldwasserExchangeUtilsEsTargets = {
  browser: 'browser',
  node: 'es',
};

const goldwasserExchangeUtilsTransform = babelTarget => ifAnyDep(
  '@goldwasserexchange/utils',
  {
    '@goldwasserexchange/utils': {
      transform: R.concat(`@goldwasserexchange/utils/${goldwasserExchangeUtilsEsTargets[babelTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

const reactRouterTargets = {
  es: 'es6',
  commonjs: 'lib',
};

const reactRouterTransform = babelESTarget => ifAnyDep(
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
  commonjs: 'src',
};

const ramdaTransform = babelESTarget => ifAnyDep(
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
  const babelESTarget = getBabelESTarget();
  const babelTarget = getBabelTarget();
  return [
    require.resolve('babel-plugin-transform-imports'),
    Object.assign(
      {},
      goldwasserExchangeUtilsTransform(babelTarget),
      reactRouterTransform(babelESTarget),
      ramdaTransform(babelESTarget),
    ),
  ];
};
