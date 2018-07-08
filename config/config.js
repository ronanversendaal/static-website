const nuxtConfig = require('../nuxt.config.js')
const apiURL = nuxtConfig.env.apiURL

export default {
  api: {
    apiURL,
    email: '<USERNAME>',
    password: '<PASSWORD>'
  }
}
