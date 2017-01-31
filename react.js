'use strict'

const modifyBabelPreset = require('modify-babel-preset')

const mergeByEnv = require('./lib/mergeByEnv')

const modifiedReactPreset = modifyBabelPreset('babel-preset-react', {
  'babel-plugin-transform-react-jsx': {
    pragma: 'createElement'
  }
})

module.exports = mergeByEnv({
  presets: [
    ['babel-preset-es2015', {modules: false}],
    'babel-preset-es2016',
    'babel-preset-es2017',
    modifiedReactPreset
  ],
  plugins: [
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-object-rest-spread'
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
