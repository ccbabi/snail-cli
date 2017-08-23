const request = require('request')
const semver = require('semver')
const pkg = require('../package')

module.exports = done => {
  request('https://registry.npmjs.org/snail-cline', (err, res, body) => {
    if (err) {
      console.error(err)
      return done()
    }
    const latestVersion = JSON.parse(body)['dist-tags'].latest
    if (semver.lt(pkg.version, latestVersion)) {
      console.log()
      console.log('新版本：%s, 当前版本：%s', latestVersion, pkg.version)
      console.log()
      console.log('更新：npm i -g snail-cline')
      console.log()
    } else {
      console.log()
      console.log('已最新')
      console.log()
    }
    done()
  })
}
