const path = require('path');
const spawn = require('cross-spawn');
const rimraf = require('rimraf');
const {
  hasPkgProp, fromRoot, resolveBin, hasFile, getPkgMainDir, getPkgModuleDir, getPkgBrowserDir,
} = require('@goldwasserexchange/read-pkg-up-helpers');

const args = process.argv.slice(2);
const here = (p) => path.join(__dirname, p);

const babelTargetOutDirs = {
  commonjs: 'lib',
  es: 'es',
};

const outDir = babelTargetOutDirs[process.env.BABEL_ES_TARGET] || babelTargetOutDirs.commonjs;

const useBuiltinConfig = !args.includes('--presets') && !hasFile('.babelrc') && !hasPkgProp('babel');

const config = useBuiltinConfig
  ? ['--presets', here('./config/babelrc.js')]
  : [];

const ignore = args.includes('--ignore')
  ? []
  : ['--ignore', 'test,__tests__,__mocks__,**/*.d.ts'];

const extensions = args.includes('--extensions')
  ? []
  : ['--extensions', '.js,.jsx,.es6,.es,.ts'];

const copyFiles = args.includes('--no-copy-files') ? [] : ['--copy-files'];

const useSpecifiedOutDir = args.includes('--out-dir');

const outDirParam = useSpecifiedOutDir ? [] : ['--out-dir', outDir];

if (!useSpecifiedOutDir && !args.includes('--no-clean')) {
  rimraf.sync(fromRoot(outDir));
}

const runAndLog = (command, commandArgs, message) => {
  const result = spawn.sync(command, commandArgs, { stdio: 'inherit' });
  if (result.status !== 0) {
    process.exit(result); // eslint-disable-line unicorn/no-process-exit
  } else {
    console.log(message); // eslint-disable-line no-console
  }
};

if (process.env.BABEL_ES_TARGET) {
  runAndLog(
    resolveBin('cross-env', { executable: 'cross-env' }),
    [
      `BABEL_TARGET=${process.env.BABEL_TARGET || 'node'}`,
      'babel',
      ...outDirParam,
      ...copyFiles,
      ...ignore,
      ...extensions,
      ...config,
      'src',
      ...args,
    ],
    'successfully generated es build'
  );
} else {
  if (hasPkgProp('module')) {
    runAndLog(
      resolveBin('cross-env', { executable: 'cross-env' }),
      [
        `BABEL_TARGET=${process.env.BABEL_TARGET || 'browser'}`,
        'BABEL_ES_TARGET=es',
        'babel',
        ...['--out-dir', getPkgModuleDir()],
        ...copyFiles,
        ...ignore,
        ...extensions,
        ...config,
        'src',
        ...args,
      ],
      'successfully generated es build'
    );
  }

  if (hasPkgProp('main')) {
    runAndLog(
      resolveBin('cross-env', { executable: 'cross-env' }),
      [
        `BABEL_TARGET=${process.env.BABEL_TARGET || 'node'}`,
        'BABEL_ES_TARGET=commonjs',
        'babel',
        ...['--out-dir', getPkgMainDir()],
        ...copyFiles,
        ...ignore,
        ...extensions,
        ...config,
        'src',
        ...args,
      ],
      'successfully generated commonjs build'
    );
  }

  if (hasPkgProp('browser')) {
    runAndLog(
      resolveBin('cross-env', { executable: 'cross-env' }),
      [
        'BABEL_TARGET=browser',
        'BABEL_ES_TARGET=es',
        'babel',
        ...['--out-dir', getPkgBrowserDir()],
        ...copyFiles,
        ...ignore,
        ...extensions,
        ...config,
        'src',
        ...args,
      ],
      'successfully generated es build'
    );
  }

  if (!hasPkgProp('main') && !(hasPkgProp('module'))) {
    console.log('you should have a main or module field in your package.json or give a BABEL_ES_TARGET environment variable!'); // eslint-disable-line no-console
    process.exit(1); // eslint-disable-line unicorn/no-process-exit
  }
}
