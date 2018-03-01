const path = require('path')
const spawn = require('cross-spawn')
const rimraf = require('rimraf')
const {hasPkgProp, fromRoot, resolveBin, hasFile, getPkgMainDir, getPkgModuleDir } = require('@goldwasserexchange/read-pkg-up-helpers');

const args = process.argv.slice(2);
const here = p => path.join(__dirname, p);

const babelTargetOutDirs = {
  commonjs: 'lib',
  es: 'es'
}

const outDir = babelTargetOutDirs[process.env.BABEL_ES_TARGET] || babelTargetOutDirs['commonjs'];

const useBuiltinConfig = !args.includes('--presets') && !hasFile('.babelrc') && !hasPkgProp('babel');

const config = useBuiltinConfig
? ['--presets', here('./config/babelrc.js')]
: [];

const ignore = args.includes('--ignore')
  ? []
  : ['--ignore', 'test,__tests__,__mocks__'];

const copyFiles = args.includes('--no-copy-files') ? [] : ['--copy-files'];

const useSpecifiedOutDir = args.includes('--out-dir');

const outDirParam = useSpecifiedOutDir ? [] : ['--out-dir', outDir];

if (!useSpecifiedOutDir && !args.includes('--no-clean')) {
  rimraf.sync(fromRoot(outDir))
}

if (process.env.BABEL_ES_TARGET) {
  const result = spawn.sync(
    resolveBin('cross-env', {executable: 'cross-env'}),
    [
      `BABEL_TARGET=${process.env.BABEL_TARGET || 'node'}`,
      'babel',
      ...outDirParam,
      ...copyFiles,
      ...ignore,
      ...config,
      'src'
    ].concat(args),
    {stdio: 'inherit'}
  );
} else {
  if (hasPkgProp('module')) {
    const resultEs = spawn.sync(
      resolveBin('cross-env', {executable: 'cross-env'}),
      [
        `BABEL_TARGET=${process.env.BABEL_TARGET || 'browser'}`,
        `BABEL_ES_TARGET=es`,
        'babel',
        ...['--out-dir', getPkgModuleDir()],
        ...copyFiles,
        ...ignore,
        ...config,
        'src'
      ].concat(args),
      {stdio: 'inherit'}
    );

    if (resultEs.status !== 0) {
      process.exit(resultEs);
    } else {
      console.log('successfully generated es build')
    }
  }

  if (hasPkgProp('main')) {
    const resultMain = spawn.sync(
      resolveBin('cross-env', {executable: 'cross-env'}),
      [
        `BABEL_TARGET=${process.env.BABEL_TARGET || 'node'}`,
        `BABEL_ES_TARGET=commonjs`,
        'babel',
        ...['--out-dir', getPkgMainDir()],
        ...copyFiles,
        ...ignore,
        ...config,
        'src'
      ].concat(args),
      {stdio: 'inherit'}
    );

    if (resultMain.status !== 0) {
      process.exit(resultMain);
    } else {
      console.log('successfully generated commonjs build')
    }
  }

  if (hasPkgProp('browser')) {
    const resultEs = spawn.sync(
      resolveBin('cross-env', {executable: 'cross-env'}),
      [
        `BABEL_TARGET=${process.env.BABEL_TARGET || 'browser'}`,
        `BABEL_ES_TARGET=es`,
        'babel',
        ...['--out-dir', getPkgBrowserDir()],
        ...copyFiles,
        ...ignore,
        ...config,
        'src'
      ].concat(args),
      {stdio: 'inherit'}
    );

    if (resultEs.status !== 0) {
      process.exit(resultEs);
    } else {
      console.log('successfully generated es build')
    }
  }

  if (!hasPkgProp('main') && !(hasPkgProp('module'))) {
    console.log('you should have a main or module field in your package.json or give a BABEL_ES_TARGET environment variable!')
    process.exit(1)
  }
}
