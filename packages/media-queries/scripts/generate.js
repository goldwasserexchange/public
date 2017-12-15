const fse = require('fs-extra');
const path = require('path');

const { operationOnUnitString } = require('@goldwasserexchange/utils');
const requireDir = require('require-dir');

const indexTemplate = require('../templates');
const watchableMediaQueriesTemplate = require('../templates/watchableMediaQueries');
const breakPointsMinMaxTemplate = require('../templates/breakPointsMinMax');

const breakPoints = require('../src/breakPoints');
const breakPointsArbitrary = require('../src/breakPointsArbitrary');

const basePath = path.resolve(__dirname, '../src/');

const getMinMq = operationOnUnitString((val) => val - 0.1);

const templates = requireDir('../templates');

let minMaxBreakPoint = {};
let lastI = 'xs';

for (var i in breakPoints) {
  minMaxBreakPoint[`${lastI}Max`] = getMinMq(breakPoints[i])
  minMaxBreakPoint[`${i}Min`] = breakPoints[i];
  lastI = i;
};

for (var i in breakPointsArbitrary) {
  minMaxBreakPoint[`${i}DownMax`] = getMinMq(breakPointsArbitrary[i])
  minMaxBreakPoint[`${i}UpMin`] = breakPointsArbitrary[i];
  lastI = i;
};


const outputTemplated = (templateName) => fse.outputFile(
  path.resolve(basePath, `./${templateName}.js`),
  templates[templateName](minMaxBreakPoint),
).then(() => Promise.resolve(templateName));

Promise.all(Object.keys(templates).map((key) => outputTemplated(key)))
.then((results) => {
  console.log('files succesfully templated:');
  results.forEach((result) => console.log(`templates/${result}.js => src/${result}.js`))
})
.catch((err) => console.error('error in file generation', err))
