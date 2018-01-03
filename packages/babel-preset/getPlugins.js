const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');
const transformImports = require('./transformImports');

const plugins = [
  // class { handleClick = () => { } }
  require.resolve('babel-plugin-transform-class-properties'),
  require.resolve('babel-plugin-transform-exponentiation-operator'),
  // The following two plugins use Object.assign directly, instead of Babel's
  // extends helper. Note that this assumes `Object.assign` is available.
  // { ...todo, completed: true }
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    {
      useBuiltIns: true,
    },
  ],
  // Transforms JSX
  ifAnyDep(
    'react',
    [
      require.resolve('babel-plugin-transform-react-jsx'),
      {
        useBuiltIns: true,
      },
    ]
  ),
  // Polyfills the runtime needed for async/await and generators
  [
    require.resolve('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true,
    },
  ],
].filter(Boolean);

const getPlugins = (env, target) => [
  ...plugins,
  // The following two plugins are currently necessary to make React warnings
  // include more valuable information. They are included here because they are
  // currently not enabled in babel-preset-react. See the below threads for more info:
  // https://github.com/babel/babel/issues/4702
  // https://github.com/babel/babel/pull/3540#issuecomment-228673661
  // https://github.com/facebookincubator/create-react-app/issues/989
  ...(
    (env === 'development' || env === 'test')
      ? [
        // Adds component stack to warning messages
        ifAnyDep(
          'react',
          require.resolve('babel-plugin-transform-react-jsx-source')
        ),
        // Adds __self attribute to JSX which React will use for some warnings
        ifAnyDep(
          'react',
          require.resolve('babel-plugin-transform-react-jsx-self')
        ),
      ]
      : []
  ),
  ...(
    (target === 'node' || (target === 'browser' && env === 'test'))
      ? [
        // Compiles import() to a deferred require()
        require.resolve('babel-plugin-dynamic-import-node'),
      ]
      : [
        // function* () { yield 42; yield 43; }
        [
          require.resolve('babel-plugin-transform-regenerator'),
          {
            // Async functions are converted to generators by babel-preset-env
            async: false,
          },
        ],
        // Adds syntax support for import()
        require.resolve('babel-plugin-syntax-dynamic-import'),
      ]
  ),
  ...(
    env === 'production'
      ? [
        ifAnyDep(
          'recharts',
          require.resolve('babel-plugin-recharts')
        ),
        ifAnyDep(
          'lodash',
          [
            require.resolve('babel-plugin-lodash'),
            {
              id: [
                'lodash',
                'recompose'
              ]
            }
          ]
        ),
        ifAnyDep(
          'date-fns',
          require.resolve('babel-plugin-date-fns')
        ),
        transformImports(),
        ifAnyDep(
          'prop-types',
          require.resolve('babel-plugin-transform-react-remove-prop-types')
        ),
        ifAnyDep(
          'react',
          require.resolve('babel-plugin-transform-react-constant-elements')
        ),
        ifAnyDep(
          'react',
          require.resolve('babel-plugin-transform-react-inline-elements')
        ),
        ifAnyDep(
          'react-loadable',
          require.resolve('react-loadable/babel')
        ),
        require.resolve('babel-plugin-minify-dead-code-elimination'),
      ].filter(Boolean)
      : []
  ),
].filter(Boolean);

module.exports = getPlugins;
