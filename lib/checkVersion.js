const request = require('request')
const semver = require('semver')
const pkg = require('../package')

module.exports = done => {
  request('https://registry.npmjs.org/snail-cline', (err, res, body) => {
    if (err) console.err(err)
    const latestVersion = JSON.parse(body)['dist-tags'].latest

    if (semver.lt(pkg.version, latestVersion)) {
      console.log('最新版本：%s', latestVersion)
      console.log('当前版本：%s', pkg.version)
      console.log('更新执行：npm update snail-cline')
    }
  })
  done()
}
