const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const R = require('ramda');

const goldwasserExchangeUtilsTransform = ifAnyDep(
  '@goldwasserexchange/utils',
  {
    '@goldwasserexchange/utils': {
      transform: R.concat('@goldwasserexchange/utils/es/'),
      preventFullImport: true,
    },
  },
  {}
);

const reactRouterTransform = ifAnyDep(
  'react-router',
  {
    'react-router': {
      transform: R.concat('react-router/es6/'),
      preventFullImport: true,
    },
  },
  {}
);

const ramdaTransform = ifAnyDep(
  'ramda',
  {
    ramda: {
      transform: R.concat('ramda/es/'),
      preventFullImport: true,
    },
  },
  {}
);

module.exports = [
  require.resolve('babel-plugin-transform-imports'),
  Object.assign(
    {},
    goldwasserExchangeUtilsTransform,
    reactRouterTransform,
    ramdaTransform,
  )
]