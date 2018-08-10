const { StatsWriterPlugin } = require('webpack-stats-plugin');

module.exports = process.env.NODE_ENV === 'production' && new StatsWriterPlugin({
  filename: 'stats/stats.json',
  transform: JSON.stringify, // by default the plugin uses JSON.stringify but with formatting
});
