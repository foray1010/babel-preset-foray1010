'use strict'

const getBrowserslistConfig = require('./lib/getBrowserslistConfig')
const mergeByEnv = require('./lib/mergeByEnv')

const babelPresetEnvConfig = {
  modules: false,
  targets: {
    browsers: getBrowserslistConfig()
  },
  useBuiltIns: true
}

module.exports = mergeByEnv({
  presets: [['babel-preset-env', babelPresetEnvConfig], 'babel-preset-react'],
  plugins: [
    'babel-plugin-react-css-modules',
    'babel-plugin-transform-object-rest-spread',
    [
      'babel-plugin-transform-react-jsx',
      {
        pragma: 'createElement'
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-ramda',
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-transform-react-inline-elements',
        ['babel-plugin-transform-react-remove-prop-types', {removeImport: true}]
      ]
    },
    test: {
      presets: [['babel-preset-env', {...babelPresetEnvConfig, modules: 'commonjs'}]],
      plugins: ['babel-plugin-transform-class-properties']
    },
    development: {
      plugins: [
        'babel-plugin-flow-react-proptypes',
        // must be required after `babel-plugin-flow-react-proptypes`
        'babel-plugin-transform-class-properties'
      ]
    }
  }
})
