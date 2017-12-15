const template = (minMaxBreakPoint) => (
`export { default as watchableMediaQueries } from './watchableMediaQueries';
export { default as breakPointsMinMax } from './breakPointsMinMax';
export { default as breakPoints } from './breakPoints';
export { default as breakPointsArbitrary } from './breakPointsArbitrary';

const mediaQueries = {
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

export default mediaQueries;
`)

module.exports = template;
