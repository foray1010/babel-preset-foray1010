'use strict'

const R = require('ramda')

const getConfigByNodeEnv = R.pathOr({}, ['env', process.env.NODE_ENV || 'development'])
const mergeAndConcat = R.mergeDeepWith(R.concat)

// temp fix https://github.com/babel/babel/issues/4539
module.exports = (config) => mergeAndConcat(config, getConfigByNodeEnv(config))
