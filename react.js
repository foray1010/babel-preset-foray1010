'use strict'

module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-stage-2')
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy'),
    [require('babel-plugin-transform-react-jsx'), {
      pragma: 'createElement'
    }]
  ],
  env: {
    production: {
      plugins: [
        require('babel-plugin-transform-react-constant-elements'),
        require('babel-plugin-transform-react-inline-elements')
      ]
    }
  }
}
