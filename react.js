'use strict'

const mergeByEnv = require('./lib/mergeByEnv')

const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry'
      }
    ],
    ['@babel/preset-react', {useBuiltIns: true}],
    '@babel/preset-flow'
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        ['babel-plugin-transform-react-remove-prop-types', {removeImport: true}],
        [
          'babel-plugin-ramda',
          {
            useES: true
          }
        ]
      ]
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            useBuiltIns: 'entry'
          }
        ]
      ]
    }
  }
}

module.exports = () => mergeByEnv(babelConfig)
