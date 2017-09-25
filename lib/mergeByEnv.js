'use strict'

const R = require('ramda')

// temp fix https://github.com/babel/babel/issues/4539
module.exports = R.converge(R.mergeDeepWith(R.concat), [
  R.dissoc('env'),
  R.pathOr({}, ['env', process.env.NODE_ENV || 'development'])
])
