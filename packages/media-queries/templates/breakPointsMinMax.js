const template = (minMaxBreakPoint) => (
`const breakPointsMinMax = ${JSON.stringify(minMaxBreakPoint, null, 2)};

export default breakPointsMinMax;
`
);

module.exports = template;
