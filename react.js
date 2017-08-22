'use strict'

const browserslistConfigByEnv = require('./lib/browserslistConfigByEnv')
const mergeByEnv = require('./lib/mergeByEnv')

module.exports = mergeByEnv({
  presets: [
    ['babel-preset-env', {
      modules: false,
      targets: {
        browsers: browserslistConfigByEnv
      },
      useBuiltIns: true
    }],
    'babel-preset-react'
  ],
  plugins: [
    'babel-plugin-react-css-modules',
    'babel-plugin-syntax-dynamic-import',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread',
    ['babel-plugin-transform-react-jsx', {
      pragma: 'createElement'
    }]
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-transform-react-inline-elements',
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
