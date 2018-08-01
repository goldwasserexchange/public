// inspired by https://github.com/kentcdodds/kcd-scripts/blob/2d2a1b0b9bea5f772ffefa3144e5bf2c9264e3d0/src/utils.js

const readPkgUp = require('read-pkg-up');
const writePkg = require('write-pkg');
const fs = require('fs');
const path = require('path');
const which = require('which');
const arrify = require('arrify');
const { has } = require('lodash');

const { pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});
const appDirectory = path.dirname(pkgPath);

const appendToPkg = appendFn => writePkg(pkgPath, Object.assign({}, pkg || {}, appendFn(pkg) || {}));

const fromRoot = (...p) => path.join(appDirectory, ...p);
const hasFile = (...p) => fs.existsSync(fromRoot(...p));

const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop));

const hasPkgSubProp = pkgProp => props => hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`));

const hasPeerDep = hasPkgSubProp('peerDependencies');
const hasDep = hasPkgSubProp('dependencies');
const hasDevDep = hasPkgSubProp('devDependencies');
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args));

const ifAnyDep = (deps, t, f) => (hasAnyDep(arrify(deps)) ? t : f);

const resolveBin = (modName, { executable = modName, cwd = process.cwd() } = {}) => {
  let pathFromWhich;
  try {
    pathFromWhich = fs.realpathSync(which.sync(executable));
  } catch (err) {
    // ignore err
  }
  try {
    const modPkgPath = require.resolve(`${modName}/package.json`);
    const modPkgDir = path.dirname(modPkgPath);
    const { bin } = require(modPkgPath); // eslint-disable-line import/no-dynamic-require,global-require
    const binPath = typeof bin === 'string' ? bin : bin[executable];
    const fullPathToBin = path.join(modPkgDir, binPath);
    if (fullPathToBin === pathFromWhich) {
      return executable;
    }
    return fullPathToBin.replace(cwd, '.');
  } catch (err) {
    if (pathFromWhich) {
      return executable;
    }
    throw err;
  }
};

const getEngines = () => pkg.engines;

const getNodeEngine = () => {
  const engines = getEngines();
  return engines ? engines.node : undefined;
};

const getNpmEngine = () => {
  const engines = getEngines();
  return engines ? engines.node : undefined;
};

const getPkgMainDir = () => pkg.main && path.dirname(pkg.main);
const getPkgModuleDir = () => pkg.module && path.dirname(pkg.module);
const getPkgBrowserDir = () => pkg.browser && path.dirname(pkg.browser);
const getPkgSrc = () => pkg.src;
const getPkgSrcDir = () => getPkgSrc() && path.dirname(getPkgSrc());

module.exports = {
  fromRoot,
  hasFile,
  hasPkgProp,
  hasPkgSubProp,
  hasPeerDep,
  hasDep,
  hasDevDep,
  hasAnyDep,
  ifAnyDep,
  resolveBin,
  getNodeEngine,
  getNpmEngine,
  getPkgMainDir,
  getPkgModuleDir,
  getPkgBrowserDir,
  appendToPkg,
  getPkgSrc,
  getPkgSrcDir,
};
