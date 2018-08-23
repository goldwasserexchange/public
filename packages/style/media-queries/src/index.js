export { default as watchableMediaQueries } from './watchableMediaQueries';
export { default as breakPointsMinMax } from './breakPointsMinMax';
export { default as breakPoints } from './breakPoints';
export { default as breakPointsArbitrary } from './breakPointsArbitrary';

const mediaQueries = {
  upSm: '(width >= 34rem)',
  upMd: '(width >= 48rem)',
  upLg: '(width >= 62rem)',
  downLg: '(width <= 74.9rem)',
  downMd: '(width <= 61.9rem)',
  downSm: '(width <= 47.9rem)',
  onlyXs: '(width <= 33.9rem)',
  onlySm: '(width >= 34rem) and (width <= 47.9rem)',
  onlyMd: '(width >= 48rem) and (width <= 61.9rem)',
  onlyLg: '(width >= 62rem) and (width <= 74.9rem)',
  onlyXl: '(width >= 75rem)',
  downCenterContainer: '(width <= 1299.9px)',
  upCenterContainer: '(width >= 1300px)',
};

export default mediaQueries;
