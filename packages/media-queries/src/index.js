export { default as watchableMediaQueries } from './watchableMediaQueries';
export { default as breakPointsMinMax } from './breakPointsMinMax';
export { default as breakPoints } from './breakPoints';
export { default as breakPointsArbitrary } from './breakPointsArbitrary';

const mediaQueries = {
  upSm: '(width >= 34em)',
  upMd: '(width >= 48em)',
  upLg: '(width >= 62em)',
  downLg: '(width <= 74.9em)',
  downMd: '(width <= 61.9em)',
  downSm: '(width <= 47.9em)',
  onlyXs: '(width <= 33.9em)',
  onlySm: '(width >= 34em) and (width <= 47.9em)',
  onlyMd: '(width >= 48em) and (width <= 61.9em)',
  onlyLg: '(width >= 62em) and (width <= 74.9em)',
  onlyXl: '(width >= 75em)',
  downCenterContainer: '(width <= 1299.9px)',
  upCenterContainer: '(width >= 1300px)',
};

export default mediaQueries;
