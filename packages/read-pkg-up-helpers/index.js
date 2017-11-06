// inspired by https://github.com/kentcdodds/kcd-scripts/blob/2d2a1b0b9bea5f772ffefa3144e5bf2c9264e3d0/src/utils.js

const readPkgUp = require('read-pkg-up');
const fs = require('fs');
const arrify = require('arrify');
const { has } = require('ramda');

const { pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const hasPkgProp = props => arrify(props).some(prop => has(prop, pkg))

const hasPkgSubProp = pkgProp => props => hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`));

const hasPeerDep = hasPkgSubProp('peerDependencies');
const hasDep = hasPkgSubProp('dependencies');
const hasDevDep = hasPkgSubProp('devDependencies');
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args))

const ifAnyDep = (deps, t, f) => (hasAnyDep(arrify(deps)) ? t : f)


module.exports = {
  hasPkgProp,
  hasPkgSubProp,
  hasPeerDep,
  hasDep,
  hasDevDep,
  hasAnyDep,
  ifAnyDep,
};