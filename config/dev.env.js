'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_Server: '"http://static.aitamoney.com"',
  BASE_URL:'"https://club.loveat.cn/game"',
  VUE_APP_BASE_API: '"https://mirror-realms.io:8084/morbev1"'
})
