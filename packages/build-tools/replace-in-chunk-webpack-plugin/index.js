const fs = require('fs');
const path = require('path');

const pluginName = 'ReplaceInChunkWebpackPlugin';
class ReplaceInChunkWebpackPlugin {
  constructor({ chunk, search, replace }) {
    this.chunk = chunk;
    this.search = search;
    this.replace = replace;
  }

  apply(compiler) {
    const replaceInChunk = (stats) => {
      const { assetsByChunkName } = stats.toJson();
      const { [this.chunk]: [chunkFileName] } = assetsByChunkName;
      const chunkPath = path.join(compiler.outputPath, chunkFileName);
      const content = fs.readFileSync(chunkPath, 'utf8').replace(this.search, this.replace(stats, compiler));
      fs.writeFileSync(chunkPath, content);
    };

    if (compiler.hooks) { // Webpack 4
      compiler.hooks.done.tap(pluginName, replaceInChunk);
    } else { // Webpack 3
      compiler.plugin('done', replaceInChunk);
    }
  }
}

module.exports = ReplaceInChunkWebpackPlugin;
