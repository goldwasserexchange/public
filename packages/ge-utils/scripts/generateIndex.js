import fs from 'fs';
import path from 'path';
import R from 'ramda';

const listFiles = () => fs.readdirSync(path.join(process.cwd(), 'src'));
const removeIndex = R.filter(R.complement(R.equals('index.js')));
const moduleName = file => path.basename(file, '.js');
const importLine = file => `import ${moduleName(file)} from './${moduleName(file)}';`;
const importLines = R.pipe(
  R.map(importLine),
  R.join('\n'),
  R.concat(R.__, '\n\n') // eslint-disable-line no-underscore-dangle
);
const exportLines = R.pipe(
  R.map(R.compose(s => `  ${s}`, moduleName)),
  R.join(',\n'),
  s => `export {\n${s},\n};\n`
);

const generateIndex = R.pipe(
  listFiles,
  removeIndex,
  R.converge(R.concat, [importLines, exportLines])
);

fs.writeFileSync(path.join(process.cwd(), 'src', 'index.js'), generateIndex());
