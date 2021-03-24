console.log('---------- vue.config.js start ----------')
const buildConfig = require('./channel/buildConfig.json')

// channel
const channel = buildConfig.channel
console.log('channel=' + channel)

// entry
const entry = 'src/entry/main-' + channel + '.js'
// const entry = 'src/entry/main.js'
console.log('entry=' + entry)

module.exports = {
  outputDir: 'dist',
  pages: {
    index: {
      entry: entry,
      template: 'public/index.html'
    }
  },
  css: {
    extract: false
  }
}
console.log('---------- vue.config.js end ----------')