const fse = require('fs-extra');
const path = require('path');

const { operationOnUnitString } = require('@goldwasserexchange/utils');
const requireDir = require('require-dir');

const breakPoints = require('../src/breakPoints');
const breakPointsArbitrary = require('../src/breakPointsArbitrary');

const basePath = path.resolve(__dirname, '../src/');

const getMinMq = operationOnUnitString(val => val - 0.1);

const templates = requireDir('../templates');

const minMaxBreakPoint = {
  ...(
    Object.keys(breakPoints).reduce(
      (result, item, index, source) => ({
        ...result,
        [`${source[index - 1] || 'xs'}Max`]: getMinMq(breakPoints[item]),
        [`${item}Min`]: breakPoints[item],
      }),
      {},
    )
  ),
  ...(
    Object.keys(breakPointsArbitrary).reduce(
      (result, item) => ({
        ...result,
        [`${item}DownMax`]: getMinMq(breakPointsArbitrary[item]),
        [`${item}UpMin`]: breakPointsArbitrary[item],
      }),
      {}
    )
  ),
};

const outputTemplated = templateName => fse.outputFile(
  path.resolve(basePath, `./${templateName}.js`),
  templates[templateName](minMaxBreakPoint),
).then(() => Promise.resolve(templateName));

Promise.all(Object.keys(templates).map(key => outputTemplated(key)))
  .then((results) => {
    console.log('files succesfully templated:'); // eslint-disable-line no-console
    results.forEach(result => console.log(`templates/${result}.js => src/${result}.js`)); // eslint-disable-line no-console
  })
  .catch(err => console.error('error in file generation', err)); // eslint-disable-line no-console
