'use strict'

const getEnv = require('./lib/getEnv')

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: getEnv() === 'test' ? 'commonjs' : false,
        useBuiltIns: 'entry'
      }
    ],
    ['@babel/preset-react', {useBuiltIns: true}],
    '@babel/preset-flow'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ...(getEnv() === 'production' && [
      '@babel/plugin-transform-react-constant-elements',
      '@babel/plugin-transform-react-inline-elements',
      ['babel-plugin-transform-react-remove-prop-types', {removeImport: true}]
    ])
  ]
})
