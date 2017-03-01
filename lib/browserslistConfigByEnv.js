'use strict'

const appRoot = require('app-root-path')
const browserslist = require('browserslist')
const fs = require('fs')

const browserslistPath = `${appRoot}/browserslist`

const browserslistConfigStr = fs.readFileSync(browserslistPath).toString()

const browserslistConfig = browserslist.parseConfig(browserslistConfigStr)

const browserslistConfigByEnv = (
  browserslistConfig[process.env.NODE_ENV] ||
  browserslistConfig.defaults
)

module.exports = browserslistConfigByEnv
