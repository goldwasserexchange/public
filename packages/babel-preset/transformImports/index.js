const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const R = require('ramda');
const getBabeltarget = require('../getBabelTarget');

const goldwasserExchangeUtilsEsTargets = {
  es: 'es',
  commonjs: 'lib'
};

const goldwasserExchangeUtilsTransform = (babelTarget) => ifAnyDep(
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
  commonjs: 'lib'
};

const reactRouterTransform = (babelTarget) => ifAnyDep(
  'react-router',
  {
    'react-router': {
      transform: R.concat(`react-router/${reactRouterTargets[babelTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

const ramdaTargets = {
  es: 'es',
  commonjs: 'src'
};

const ramdaTransform = (babelTarget) => ifAnyDep(
  'ramda',
  {
    ramda: {
      transform: R.concat(`ramda/${ramdaTargets[babelTarget]}/`),
      preventFullImport: true,
    },
  },
  {}
);

module.exports = () => {
  const babelTarget = getBabeltarget(true);
  return [
    require.resolve('babel-plugin-transform-imports'),
    Object.assign(
      {},
      goldwasserExchangeUtilsTransform(babelTarget),
      reactRouterTransform(babelTarget),
      ramdaTransform(babelTarget),
    )
  ];
};
