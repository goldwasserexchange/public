import fs from 'fs';
import path from 'path';
import { filter, complement, equals, pipe, map, join, concat, __ } from 'ramda';

const listFiles = () => fs.readdirSync(path.join(process.cwd(), 'src'));
const removeIndex = filter(complement(equals('index.js')));
const moduleName = file => path.basename(file, '.js');
const importLine = file => `export { default as ${moduleName(file)} } from './${moduleName(file)}';`;
const importLines = pipe(
  map(importLine),
  join('\n'),
  concat(__, '\n\n') // eslint-disable-line no-underscore-dangle
);

const generateIndex = pipe(
  listFiles,
  removeIndex,
  importLines
);

fs.writeFileSync(path.join(process.cwd(), 'src', 'index.js'), generateIndex());
