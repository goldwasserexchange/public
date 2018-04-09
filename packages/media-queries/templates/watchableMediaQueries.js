const template = minMaxBreakPoint => (
  `const watchableMediaQueries = {
  sm: '(min-width: ${minMaxBreakPoint.smMin})',
  md: '(min-width: ${minMaxBreakPoint.mdMin})',
  lg: '(min-width: ${minMaxBreakPoint.lgMin})',
  print: 'print',
  centerContainer: '(min-width: ${minMaxBreakPoint.centerContainerUpMin})',
}

export default watchableMediaQueries;
`);

module.exports = template;
