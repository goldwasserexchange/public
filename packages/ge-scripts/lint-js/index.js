const path = require('path');
const spawn = require('cross-spawn');
const yargsParser = require('yargs-parser');
const { hasPkgProp, resolveBin, hasFile } = require('@goldwasserexchange/read-pkg-up-helpers');

let args = process.argv.slice(2);
const here = p => path.join(__dirname, p);
const hereRelative = p => here(p).replace(process.cwd(), '.');
const parsedArgs = yargsParser(args);

const useBuiltinConfig = !args.includes('--config')
  && !hasFile('.eslintrc')
  && !hasFile('.eslintrc.js')
  && !hasPkgProp('eslintConfig');

const config = useBuiltinConfig
  ? ['--config', hereRelative('./config/eslintrc.js')]
  : [];

const ext = args.includes('--ext')
  ? []
  : ['--ext', '.js,.ts'];

const useBuiltinIgnore = !args.includes('--ignore-path')
  && !hasFile('.eslintignore')
  && !hasPkgProp('eslintIgnore');

const ignore = useBuiltinIgnore
  ? ['--ignore-path', '.gitignore']
  : [];

const cache = args.includes('--no-cache') ? [] : ['--cache'];

const filesGiven = parsedArgs._.length > 0;

// we need to take all the flag-less arguments (the files that should be linted)
// and filter out the ones that aren't js files. Otherwise json or css files
// may be passed through
args = filesGiven ? args.filter(a => parsedArgs._.includes(a) || a.endsWith('.js') || a.endsWith('.ts')) : [...args, '.'];

const result = spawn.sync(
  resolveBin('eslint'),
  [...config, ...ext, ...ignore, ...cache, ...args],
  { stdio: 'inherit' }
);

process.exit(result.status); // eslint-disable-line unicorn/no-process-exit
