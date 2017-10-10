const os = require('os')
const fs = require('fs')
const path = require('path')
const logger = require('./logger')

let isTodyFirst = true
const home = os.homedir()
const snailrc = path.join(home, '.snailrc')
const exists = fs.existsSync(snailrc)
const date = new Date().getDate()

function updateSnailRc () {
  fs.writeFile(snailrc, JSON.stringify({
    runDate: date
  }), err => {
    if (err) logger.error(`${err.message || err}`)
  })
}

if (exists) {
  const rcContent = fs.readFileSync(snailrc, 'utf8')
  const rc = JSON.parse(rcContent)

  isTodyFirst = rc.runDate !== date
  if (rc.runDate !== date) {
    isTodyFirst = true
    updateSnailRc()
  } else {
    isTodyFirst = false
  }
} else {
  updateSnailRc()
}

module.exports = isTodyFirst
