const fs = require('fs')
const nodeEnv = process.argv[2]
const channel = process.argv[3]

// .env.config
const envConfig = `NODE_ENV='${nodeEnv}'
VUE_APP_CHANNEL='${channel}'`
fs.writeFile('.env.config', envConfig, function () { })

// buildConfig.json
const buildConfig = `{
  "channel": "${channel}"
}
`
fs.writeFile('buildConfig.json', buildConfig, function () { })

// resource.js
// const path = (channel === 'jin') ? '' : (channel + '/')
const resource = `const photo = {
  logo: require('./assets/img-${channel}/logo.png')
}
export default photo
`
fs.writeFile('./src/resource.js', resource, function () { })

// index.js
const index = `import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './${channel}'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
`