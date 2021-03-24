console.log('---------- outputBuildConfig.js start ----------')
const fs = require('fs')
const nodeEnv = process.argv[2]
const channel = process.argv[3]
console.log('nodeEnv=' + nodeEnv)
console.log('channel=' + channel)

// .env.config
const envConfig = `NODE_ENV='${nodeEnv}'
VUE_APP_CHANNEL='${channel}'`
fs.writeFile('.env.config', envConfig, function () { })

// buildConfig.json
const buildConfig = `{
  "channel": "${channel}"
}
`
fs.writeFile('./channel/buildConfig.json', buildConfig, function () { })

// resource.js
fs.readFile('./channel/resource.js', 'utf-8', function(err, data) {
  if(err) {
    console.log(err)
  } else {
    console.log(typeof data)
    const resourceOutput = eval(data)
    fs.writeFile('./src/resource.js', resourceOutput, function () { })
  }
})
// const resourceOutput = `const photo = {
//   logo: require('./assets/img-${channel}/logo.png')
// }
// export default photo
// `
// fs.writeFile('./src/resource.js', resourceInput, function () { })