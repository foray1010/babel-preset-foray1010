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
    [require('babel-preset-es2015'), {modules: false}],
    require('babel-preset-es2016'),
    require('babel-preset-es2017'),
    modifiedReactPreset
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy').default,
    require('babel-plugin-transform-object-rest-spread')
  ],
  env: {
    production: {
      plugins: [
        require('babel-plugin-transform-react-constant-elements'),
        require('babel-plugin-transform-react-inline-elements'),
        require('babel-plugin-transform-react-remove-prop-types').default
      ]
    },
    test: {
      plugins: [
        require('babel-plugin-istanbul')
      ]
    },
    development: {
      plugins: [
        require('babel-plugin-tcomb').default
      ]
    }
  }
})
