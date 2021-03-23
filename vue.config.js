const buildConfig = require('./channel/buildConfig.json')
const channel = buildConfig.channel
module.exports = {
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/entry/' + channel + '.js',
      template: 'public/index.html'
    }
  }
}