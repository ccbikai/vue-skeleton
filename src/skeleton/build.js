const fs = require('fs')
const { resolve } = require('path')
const {createBundleRenderer} = require('vue-server-renderer')

const renderer = createBundleRenderer(resolve(__dirname, '../../docs/skeleton.json'), {
  template: fs.readFileSync(resolve(__dirname, '../../docs/index.html'), 'utf-8'),
  inject: false
})

renderer.renderToString({}).then(html => {
  fs.writeFileSync(resolve(__dirname, '../../docs/index.html'), html, 'utf-8')
})
