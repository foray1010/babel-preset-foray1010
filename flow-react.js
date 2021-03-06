'use strict'

const getEnv = require('./lib/getEnv')

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: getEnv() === 'test' ? 'commonjs' : false,
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: false },
      },
    ],
    [
      '@babel/preset-react',
      {
        development: getEnv() === 'development',
        useBuiltIns: true,
      },
    ],
    '@babel/preset-flow',
  ],
  plugins: [
    ...(getEnv() === 'production'
      ? [
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements',
          [
            'babel-plugin-transform-react-remove-prop-types',
            { removeImport: true },
          ],
        ]
      : []),
  ],
})
