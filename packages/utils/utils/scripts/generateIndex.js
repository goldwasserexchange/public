const fs = require('fs');
const path = require('path');
const {
  reject, equals, pipe, map, join, concat, __,
} = require('ramda');

const listFiles = () => fs.readdirSync(path.join(process.cwd(), 'src'));
const removeIndex = reject(equals('index.js'));
const moduleName = file => path.basename(file, '.js');
const exportLine = file => `export { default as ${moduleName(file)} } from './${moduleName(file)}';`;
const exportLines = pipe(
  map(exportLine),
  join('\n'),
  concat(__, '\n') // eslint-disable-line no-underscore-dangle
);

const generateIndex = pipe(
  listFiles,
  removeIndex,
  exportLines,
  index => fs.writeFileSync(path.join(process.cwd(), 'src', 'index.js'), index),
);

generateIndex();
