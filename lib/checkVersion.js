const request = require('request')
const semver = require('semver')
const pkg = require('../package')
const logger = require('./logger')

module.exports = done => {
  // https://registry.npmjs.org/snail-cline
  request('https://registry.yarnpkg.com/snail-cline', (err, res, body) => {
    if (err) {
      logger.error(err.message || err)
      return done()
    }
    const latestVersion = JSON.parse(body)['dist-tags'].latest

    console.log('')
    if (semver.lt(pkg.version, latestVersion)) {
      logger.warning('Latest: %s, Current: %s.', latestVersion, pkg.version)
      logger.warning('Update: npm i -g snail-cline')
    } else {
      logger.success('lt\'s latest.')
    }
    done()
  })
}
