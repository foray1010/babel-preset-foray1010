'use strict'

const mergeAndConcat = require('merge-and-concat')

// temp fix https://github.com/babel/babel/issues/4539
module.exports = (config) => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  if (config.env && config.env[nodeEnv]) {
    mergeAndConcat(config, config.env[nodeEnv])
  }

  return config
}
