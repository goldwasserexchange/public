const template = (minMaxBreakPoint) => (
`const breakPointsMinMax = ${JSON.stringify(minMaxBreakPoint, null, 2)};

module.exports = breakPointsMinMax;
`
);

module.exports = template;
