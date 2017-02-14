'use strict'

const mergeByEnv = require('../lib/mergeByEnv')

module.exports = mergeByEnv({
  presets: [
    'babel-preset-react'
  ],
  plugins: [
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-object-rest-spread',
    ['babel-plugin-transform-react-jsx', {
      pragma: 'createElement'
    }]
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-transform-react-remove-prop-types'
      ]
    },
    test: {
      plugins: [
        'babel-plugin-istanbul'
      ]
    },
    development: {
      plugins: [
        'babel-plugin-tcomb'
      ]
    }
  }
})
