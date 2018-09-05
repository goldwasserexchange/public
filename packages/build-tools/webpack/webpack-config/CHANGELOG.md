# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.4.0"></a>
# [4.4.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.3.1...v4.4.0) (2018-09-05)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="4.3.1"></a>
## [4.3.1](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.3.0...v4.3.1) (2018-08-31)


### Reverts

* **webpack-config:** revert to old runtimeChunk and splitChunks config ([b43bb63](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/b43bb63))




<a name="4.3.0"></a>
# [4.3.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.2.2...v4.3.0) (2018-08-31)


### Features

* **webpack-config:** create a vendor cachegroup by default in splitChunk config ([874cf61](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/874cf61))




<a name="4.2.2"></a>
## [4.2.2](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.2.1...v4.2.2) (2018-08-31)


### Bug Fixes

* **webpack-config:** add default value to optimization config from package.json ([0a7536d](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/0a7536d))




<a name="4.2.1"></a>
## [4.2.1](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.2.0...v4.2.1) (2018-08-31)


### Bug Fixes

* **webpack-config:** fix ternary problem in runtimeChunk configuration ([ab757b2](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/ab757b2))




<a name="4.2.0"></a>
# [4.2.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.1.0...v4.2.0) (2018-08-31)


### Bug Fixes

* **webpack-config:** the .mjs extension should be the first resolverd ([2ed4baa](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/2ed4baa))


### Features

* **webpack-config:** make extensions and mainFields configurable ([5cc487e](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/5cc487e))
* **webpack-config:** make optimization.splitChunks and optimization.runTimeChunk configurable ([390afd5](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/390afd5))




<a name="4.1.0"></a>
# [4.1.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/compare/v4.0.2...v4.1.0) (2018-08-23)


### Features

* **webpack-config:** add .mjs extension to webpack resolve ([9c8595d](https://github.com/goldwasserexchange/javascript/tree/master/packages/build-tools/webpack/webpack-config/commit/9c8595d))




<a name="4.0.2"></a>
## [4.0.2](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v4.0.1...v4.0.2) (2018-08-23)


### Bug Fixes

* **webpack-config:** add missing whatwg-fetch dependency ([62811a6](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/62811a6))




<a name="4.0.1"></a>
## [4.0.1](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v4.0.0...v4.0.1) (2018-08-22)


### Bug Fixes

* **webpack-config:** fix es6 import to cjs import in stringArrayToRegexArray ([11c08ac](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/11c08ac))




<a name="4.0.0"></a>
# [4.0.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.52.0...v4.0.0) (2018-08-22)


### Bug Fixes

* **webpack-config:** add missing } in webpackPkgConfig ([639070d](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/639070d))
* **webpack-config:** do not run extract-css-chunks-webpack-plugin when target is not web ([7637d44](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/7637d44))
* **webpack-config:** fix webpack config for node projects ([658fdac](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/658fdac))
* **webpack-config:** remove css and chunking from optimization when target is not web ([32ff20e](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/32ff20e))
* **webpack-config:** remove whatwg-fetch entry when target is not web ([ee99eac](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/ee99eac))
* **webpack-config:** use DefinePlugin only when target is web ([74d2e8f](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/74d2e8f))


### Code Refactoring

* **webpack-config:** rename gwwebpack to gewebpack ([9204a2f](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/9204a2f)), closes [#28](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/issues/28)


### Features

* **webpack-config:** add support for externals ([d271034](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/d271034))
* **webpack-config:** give default webpack preset that can be overriden from package.json ([4cf1d61](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/4cf1d61)), closes [#31](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/issues/31)
* **webpack-config:** support js config files for gewebpack ([7b66e8e](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/7b66e8e)), closes [#32](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/issues/32)


### BREAKING CHANGES

* **webpack-config:** you need to change the gwwebpack key of package.json to gewebpack




<a name="3.52.0"></a>
# [3.52.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.51.2...v3.52.0) (2018-08-17)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.51.2"></a>
## [3.51.2](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.51.1...v3.51.2) (2018-08-17)


### Bug Fixes

* **webpack-config:** fix output file naming and hashes ([2b7c240](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/2b7c240))




<a name="3.51.1"></a>
## [3.51.1](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.51.0...v3.51.1) (2018-08-17)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.51.0"></a>
# [3.51.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.50.0...v3.51.0) (2018-08-17)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.50.0"></a>
# [3.50.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.49.2...v3.50.0) (2018-08-17)


### Features

* **webpack-config:** read template file from package.json for HTML Webpack plugin ([b055439](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/b055439)), closes [#25](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/issues/25)




<a name="3.49.1"></a>
## [3.49.1](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.49.0...v3.49.1) (2018-08-16)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.46.0"></a>
# [3.46.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.12...v3.46.0) (2018-08-14)


### Features

* **webpack-config:** add webpackDashboard plugin becaus we won't be using express for the devserver ([32a4084](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/32a4084))




<a name="3.45.12"></a>
## [3.45.12](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.11...v3.45.12) (2018-08-13)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.45.11"></a>
## [3.45.11](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.10...v3.45.11) (2018-08-13)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.45.10"></a>
## [3.45.10](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.9...v3.45.10) (2018-08-13)


### Bug Fixes

* **webpack-config:** fix postcss.config.js path ([4bcdd38](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/4bcdd38))




<a name="3.45.9"></a>
## [3.45.9](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.8...v3.45.9) (2018-08-13)


### Bug Fixes

* **webpack-config:** try to fix path to postcss.config.js ([c86cc2d](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/c86cc2d))




<a name="3.45.8"></a>
## [3.45.8](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.7...v3.45.8) (2018-08-10)


### Bug Fixes

* **webpack-config:** fix path to postcss.config.js ([4352831](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/4352831))




<a name="3.45.7"></a>
## [3.45.7](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.6...v3.45.7) (2018-08-10)




**Note:** Version bump only for package @goldwasserexchange/webpack-config

<a name="3.45.5"></a>
## [3.45.5](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.4...v3.45.5) (2018-08-10)


### Bug Fixes

* **webpack-config:** change broken dependency on postcss-config ([6c36e09](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/6c36e09))




<a name="3.45.3"></a>
## [3.45.3](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.2...v3.45.3) (2018-08-10)


### Bug Fixes

* **webpack-config:** add goldwasser exchange postcss-config dependency ([b56156d](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/b56156d))




<a name="3.45.2"></a>
## [3.45.2](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.1...v3.45.2) (2018-08-10)


### Bug Fixes

* **webpack-config:** fix react-dev-util to v6 next ([7c75f7d](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/7c75f7d))




<a name="3.45.1"></a>
## [3.45.1](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.45.0...v3.45.1) (2018-08-10)


### Bug Fixes

* **package.json:** update babel loader to v8 beta 4 ([86c94b8](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/86c94b8))




<a name="3.45.0"></a>
# [3.45.0](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/compare/v3.44.4...v3.45.0) (2018-08-10)


### Features

* **webpack-config:** create webpack-config package ([4d66712](https://github.com/goldwasserexchange/javascript/tree/master/packages/style-vars/commit/4d66712))
