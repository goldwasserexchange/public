# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.20.0"></a>
# [3.20.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/babel-preset/compare/v3.19.0...v3.20.0) (2018-01-03)


### Features

* **babel-preset:** detect node version fixed in package.json engines to use as target (fallback to ([a9fa55d](https://github.com/goldwasserexchange/javascript/tree/master/packages/babel-preset/commit/a9fa55d))




<a name="3.19.0"></a>
# [3.19.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/babel-preset/compare/v3.18.2...v3.19.0) (2018-01-03)


### Features

* **babel-preset:** add date-fns babel plugin ([690ea1f](https://github.com/goldwasserexchange/javascript/tree/master/packages/babel-preset/commit/690ea1f))




<a name="3.14.3"></a>
## [3.14.3](https://github.com/goldwasserexchange/javascript/tree/master/packages/babel-preset/compare/v3.14.2...v3.14.3) (2017-12-15)




**Note:** Version bump only for package @goldwasserexchange/babel-preset

<a name="3.8.0"></a>
# [3.8.0](https://github.com/goldwasserexchange/javascript/compare/v3.7.0...v3.8.0) (2017-12-14)




**Note:** Version bump only for package @goldwasserexchange/babel-preset

<a name="2.0.4"></a>
## [2.0.4](https://github.com/goldwasserexchange/javascript/compare/v2.0.3...v2.0.4) (2017-11-23)


### Bug Fixes

* **babel-preset:** add support for exponentiation operator ([ce1da32](https://github.com/goldwasserexchange/javascript/commit/ce1da32))
* **babel-preset:** add uglify target to node configuration in babel-preset-env ([4cbc8a7](https://github.com/goldwasserexchange/javascript/commit/4cbc8a7))




<a name="2.0.3"></a>
## [2.0.3](https://github.com/goldwasserexchange/javascript/compare/v2.0.2...v2.0.3) (2017-11-23)


### Bug Fixes

* **babel-preset:** add missing filter on plugins ([c68ea6c](https://github.com/goldwasserexchange/javascript/commit/c68ea6c))




<a name="2.0.2"></a>
## [2.0.2](https://github.com/goldwasserexchange/javascript/compare/v2.0.1...v2.0.2) (2017-11-23)


### Bug Fixes

* **babel-preset:** fix getPresetEnv modules option ([7cf288b](https://github.com/goldwasserexchange/javascript/commit/7cf288b))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/goldwasserexchange/javascript/compare/v2.0.0...v2.0.1) (2017-11-23)


### Bug Fixes

* **babel-preset:** fix undefined in preset and plugin arrays ([707d577](https://github.com/goldwasserexchange/javascript/commit/707d577))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/goldwasserexchange/javascript/compare/v1.14.0...v2.0.0) (2017-11-22)


### Bug Fixes

* **babel-preset:** rename BABEL_TARGET to BABEL_ES_TARGET ([8c814a1](https://github.com/goldwasserexchange/javascript/commit/8c814a1))


### Features

* **babel-preset:** allow to choose to build for node or the browser ([36141bc](https://github.com/goldwasserexchange/javascript/commit/36141bc))


### BREAKING CHANGES

* **babel-preset:** BABEL_TARGET as been renamed to BABEL_ES_TARGET




<a name="1.14.0"></a>
# [1.14.0](https://github.com/goldwasserexchange/javascript/compare/v1.13.1...v1.14.0) (2017-11-22)


### Features

* **babel-preset:** add support for BABEL_TARGET to choose a es or commonjs build ([92ead0f](https://github.com/goldwasserexchange/javascript/commit/92ead0f))




<a name="1.13.1"></a>
## [1.13.1](https://github.com/goldwasserexchange/javascript/compare/v1.13.0...v1.13.1) (2017-11-20)


### Bug Fixes

* **babel-preset/transformImports:** fix object spread not supported by node ([254c0e2](https://github.com/goldwasserexchange/javascript/commit/254c0e2))




<a name="1.13.0"></a>
# [1.13.0](https://github.com/goldwasserexchange/javascript/compare/v1.12.0...v1.13.0) (2017-11-20)


### Features

* **babel-preset/getPlugins:** extract babel-plugin-transform-imports config to it's own file ([81a62d7](https://github.com/goldwasserexchange/javascript/commit/81a62d7))




<a name="1.12.0"></a>
# [1.12.0](https://github.com/goldwasserexchange/javascript/compare/v1.11.2...v1.12.0) (2017-11-20)


### Features

* **babel-preset/getPlugins:** use ifAnyDep in babel-preset getPlugins ([ac8573a](https://github.com/goldwasserexchange/javascript/commit/ac8573a))
* **babel-preset/getPresetEnv:** use ifAnyDep in requirePresetEnv ([0a9e274](https://github.com/goldwasserexchange/javascript/commit/0a9e274))
* **babel-preset/getPresetEnv:** use ifAnyDep in target of getPresetEnv ([696ddb4](https://github.com/goldwasserexchange/javascript/commit/696ddb4))
* **babel-preset/getPresetEnv:** use ifAnyDep to determine babel-preset-env module ([9a61069](https://github.com/goldwasserexchange/javascript/commit/9a61069))
* **babel-preset/getPresets:** use ifAnyDep in getPresets ([3344de6](https://github.com/goldwasserexchange/javascript/commit/3344de6))




<a name="1.11.2"></a>
## [1.11.2](https://github.com/goldwasserexchange/javascript/compare/v1.11.1...v1.11.2) (2017-11-20)


### Bug Fixes

* **babel-preset:** remove env check ([086b340](https://github.com/goldwasserexchange/javascript/commit/086b340))




<a name="1.11.1"></a>
## [1.11.1](https://github.com/goldwasserexchange/javascript/compare/v1.11.0...v1.11.1) (2017-11-19)


### Bug Fixes

* **babel-preset:** fix modules option in getPresetEnv ([7f9a670](https://github.com/goldwasserexchange/javascript/commit/7f9a670))




<a name="1.11.0"></a>
# [1.11.0](https://github.com/goldwasserexchange/javascript/compare/v1.10.1...v1.11.0) (2017-11-18)


### Features

* **babel-preset:** create [@goldwasserexchange](https://github.com/goldwasserexchange)/babel-preset ([bf3d0ff](https://github.com/goldwasserexchange/javascript/commit/bf3d0ff))
