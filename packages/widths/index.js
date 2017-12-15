const { breakPointsArbitrary: { centerContainerUpMin } = {} } = require('@goldwasserexchange/media-queries');
const { operationOnUnitString } = require('@goldwasserexchange/utils');

const widths = {
  centerContainerWidth: centerContainerUpMin,
  halfCenterContainerWidth: operationOnUnitString((x) => x / 2, centerContainerUpMin),
  selectButtonWidthSmallScreen: '3em',
  selectButtonWidthLargeScreen: '2.5em',
}

module.exports = widths;
