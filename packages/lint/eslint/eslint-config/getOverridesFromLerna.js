const globby = require('globby');
const { safeParse } = require('@goldwasserexchange/utils');
const fs = require('fs');
const path = require('path');
const arrify = require('arrify');

const {
  dissoc,
  reduce,
  tryCatch,
  always,
  pipe,
  view,
  lensProp,
  map,
  defaultTo,
  applySpec,
  unary,
  pick,
  values,
  keys,
  flatten,
  filter,
  contains,
  reject,
  isEmpty,
  uniq,
} = require('ramda');

const readAndParse = unary(pipe(
  tryCatch(
    fs.readFileSync,
    always(undefined)
  ),
  safeParse,
  defaultTo({})
));


const globSync = patterns => globby.sync(patterns, { ignore: ['**/node_modules/**'] });

const getLernaFiles = pipe(
  path.dirname,
  dirName => path.join(dirName, '**/*.js'),
  arrify,
);

const filterLibraries = (libsMap) => {
  const libs = keys(libsMap);
  return filter(dep => contains(dep, libs));
};

const extender = exts => pipe(
  map(require),
  reduce(
    (acc, { rules = {}, plugins = [], extends: extendsArr = [] }) => ({
      plugins: [...acc.plugins, ...plugins],
      rules: { ...acc.rules, ...rules },
      extends: uniq([...acc.extends, ...arrify(extendsArr)]),
    }),
    {
      plugins: [],
      rules: {},
      extends: [],
    }
  ),
)(exts);

const mergeExtender = ({
  rules = {}, plugins = [], extends: exts = [], ...config
}) => {
  const resolvedExtends = extender(exts);
  return {
    ...config,
    rules: { ...rules, ...resolvedExtends.rules },
    plugins: uniq([...plugins, ...resolvedExtends.plugins]),
    extends: resolvedExtends.extends,
  };
};

const deepMergeExtender = (config) => {
  let result = config;
  while (result.extends && !isEmpty(result.extends)) {
    result = mergeExtender(result);
  }
  return result;
};

const getLernaExtend = extendsMap => packagePath => pipe(
  readAndParse,
  pick(['dependencies', 'devDependencies', 'peerDependencies']),
  values,
  map(keys),
  flatten,
  filterLibraries(extendsMap),
  map(pipe(
    dep => extendsMap[dep],
  )),
  flatten,
)(packagePath);

const packagePathToOverride = extendsMap => applySpec({
  files: getLernaFiles,
  extends: getLernaExtend(extendsMap),
});

const getOverridesFromLernaConfig = extendsMap => pipe(
  file => path.join(process.cwd(), file),
  readAndParse,
  view(lensProp('packages')),
  defaultTo([]),
  map(packagePath => `${packagePath}/package.json`),
  globSync,
  map(packagePathToOverride(extendsMap)),
  reject(extendDef => isEmpty(extendDef.extends)),
  map(deepMergeExtender),
  map(dissoc('extends'))
)('lerna.json');

module.exports = getOverridesFromLernaConfig;
