'use strict'

module.exports = () => process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
