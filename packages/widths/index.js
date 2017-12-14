const { centerContainer } = require('@goldwasserexchange/media-queries/breakPointsArbitrary');
const { operationOnUnitString } = require('@goldwasserexchange/utils');

const widths = {
  centerContainerWidth: centerContainer,
  halfCenterContainerWidth: operationOnUnitString((x) => x / 2, centerContainer),
  selectButtonWidthSmallScreen: '3em',
  selectButtonWidthLargeScreen: '2.5em',
}

module.exports = widths;
