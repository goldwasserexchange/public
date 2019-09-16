const template = (minMaxBreakPoint) => (
  `const breakPointsMinMax = {
  ${Object.keys(minMaxBreakPoint).map((breakPoint, index) => `${index !== 0 ? '\n  ' : ''}${breakPoint}: '${minMaxBreakPoint[breakPoint]}'`)},
};

export default breakPointsMinMax;
`
);

module.exports = template;
