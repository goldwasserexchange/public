const template = (minMaxBreakPoint) => (
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

module.exports = template;