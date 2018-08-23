const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {
  pipe,
  prop,
  split,
  map,
  join,
  head,
} = require('ramda');
const _ = require('lodash');
const { pkg } = require('@goldwasserexchange/read-pkg-up-helpers');
const getStartUrl = require('../../utils/getStartUrl');
const { target } = require('../../webpackPkgConfig');


const nameParts = pipe(
  prop('name'),
  split('-'),
  map(namePart => _.capitalize(namePart)),
)(pkg);

const pkgManifest = pkg.manifest || {};
const pkgFavIcons = pkg.favicons || {};

module.exports = target === 'web' && new WebpackPwaManifest(Object.assign(
  {},
  {
    filename: 'static/manifest.[hash].json',
    name: join(' ', nameParts),
    short_name: head(nameParts),
    orientation: 'portrait',
    display: 'standalone',
    start_url: getStartUrl(),
    crossorigin: null,
    inject: true,
    fingerprints: true,
    ios: true,
    publicPath: null,
    includeDirectory: true,
    icons: [
      {
        src: path.resolve(pkgFavIcons.square),
        sizes: [57, 60, 72, 76, 114, 120, 144, 152, 180],
        destination: path.join('static', 'icons', 'ios'),
        ios: true,
      },
      {
        src: path.resolve(pkgFavIcons.round),
        size: 1024,
        destination: path.join('static', 'icons', 'ios'),
        ios: 'startup',
      },
      {
        src: path.resolve(pkgFavIcons.round),
        sizes: [36, 48, 72, 96, 144, 192, 256, 384, 512],
        destination: path.join('static', 'icons', 'android'),
      },
    ],
    theme_color: '#76beea',
    background_color: '#76beea',
  },
  pkgManifest,
));

