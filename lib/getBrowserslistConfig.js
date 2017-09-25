'use strict'

const appRoot = require('app-root-path')
const R = require('ramda')

const pkg = require(`${appRoot}/package`)

module.exports = R.propOr([], 'browserslist', pkg)
