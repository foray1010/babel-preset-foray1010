'use strict'

const mergeAndConcat = require('merge-and-concat')

const reactRules = require('./rules/react')

module.exports = mergeAndConcat({
  presets: [
    ['babel-preset-env', {
      modules: false,
      targets: {
        browsers: [
          'chrome >= 34'
        ]
      },
      useBuiltIns: true
    }]
  ]
}, reactRules)