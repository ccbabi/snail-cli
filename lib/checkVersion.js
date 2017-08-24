const request = require('request')
const semver = require('semver')
const colors = require('colors/safe')
const pkg = require('../package')

module.exports = done => {
  request('https://registry.npmjs.org/snail-cline', (err, res, body) => {
    if (err) {
      console.error(colors.red(`${err}\n`))
      return done()
    }
    const latestVersion = JSON.parse(body)['dist-tags'].latest

    console.log('')
    if (semver.lt(pkg.version, latestVersion)) {
      console.log(colors.magenta('latest: %s, current: %s\n'), latestVersion, pkg.version)
      console.log(colors.cyan('update: $ npm i -g snail-cline\n'))
    } else {
      console.log(colors.gray('lt\'s latest\n'))
    }
    done()
  })
}
