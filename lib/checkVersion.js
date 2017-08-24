const request = require('request')
const semver = require('semver')
const chalk = require('chalk')
const pkg = require('../package')

module.exports = done => {
  request('https://registry.npmjs.org/snail-cline', (err, res, body) => {
    if (err) {
      console.error(chalk.red(`${err}\n`))
      return done()
    }
    const latestVersion = JSON.parse(body)['dist-tags'].latest

    console.log('\n')
    if (semver.lt(pkg.version, latestVersion)) {
      console.log(chalk.magenta('latest: %s, current: %s\n'), latestVersion, pkg.version)
      console.log(chalk.bold.cyan('update: $ npm i -g snail-cline\n'))
    } else {
      console.log(chalk.gray('lt\'s latest\n'))
    }
    done()
  })
}
