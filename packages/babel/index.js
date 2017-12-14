const path = require('path')
const spawn = require('cross-spawn')
const rimraf = require('rimraf')
const {hasPkgProp, fromRoot, resolveBin, hasFile} = require('@goldwasserexchange/read-pkg-up-helpers');

const args = process.argv.slice(2);
const here = p => path.join(__dirname, p);
const hereRelative = p => here(p).replace(process.cwd(), '.');

const babelTargetOutDirs = {
  commonjs: 'lib',
  es: 'es'
}

const outDir = babelTargetOutDirs[process.env.BABEL_ES_TARGET] || babelTargetOutDirs['commonjs'];

const useBuiltinConfig = !args.includes('--presets') && !hasFile('.babelrc') && !hasPkgProp('babel');

const config = useBuiltinConfig
? ['--presets', hereRelative('./config/babelrc.js')]
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
console.log([...outDirParam, ...copyFiles, ...ignore, ...config, 'src'].concat(args))
const result = spawn.sync(
  resolveBin('babel-cli', {executable: 'babel'}),
  [...outDirParam, ...copyFiles, ...ignore, ...config, 'src'].concat(args),
  {stdio: 'inherit'}
);

process.exit(result.status);
