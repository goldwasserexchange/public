const fs = require('fs');
const path = require('path');
const { operationOnUnitString } = require('@goldwasserexchange/utils');

const breakPoints = require('../breakPoints');
const breakPointsArbitrary = require('../breakPointsArbitrary');

const getMinMq = operationOnUnitString((val) => val - 0.1)

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

fs.writeFileSync(path.resolve(__dirname, '../breakPointsMinMax.js'),
`const breakPointsMinMax = ${JSON.stringify(minMaxBreakPoint, null, 2)};

module.exports = breakPointsMinMax;
`);

fs.writeFileSync(path.resolve(__dirname, '../index.js'),
`const mediaQueries = {
  upSm: '(width >= ${minMaxBreakPoint.smMin})',
  upMd: '(width >= ${minMaxBreakPoint.mdMin})',
  upLg: '(width >= ${minMaxBreakPoint.lgMin})',
  downLg: '(width <= ${minMaxBreakPoint.lgMax})',
  downMd: '(width <= ${minMaxBreakPoint.mdMax})',
  downSm: '(width <= ${minMaxBreakPoint.smMax})',
  onlyXs: '(width <= ${minMaxBreakPoint.xsMax})',
  onlySm: '(width >= ${minMaxBreakPoint.smMin}) and (width <= ${minMaxBreakPoint.smMax})',
  onlyMd: '(width >= ${minMaxBreakPoint.mdMin}) and (width <= ${minMaxBreakPoint.mdMax})',
  onlyLg: '(width >= ${minMaxBreakPoint.lgMin}) and (width <= ${minMaxBreakPoint.lgMax})',
  onlyXl: '(width >= ${minMaxBreakPoint.xlMin})',
  downCenterContainer: '(width <= ${minMaxBreakPoint.centerContainerDownMax})',
  upCenterContainer: '(width >= ${minMaxBreakPoint.centerContainerUpMin})',
};

module.exports = mediaQueries;
`)
