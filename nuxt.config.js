let apiURL = 'http://api.ronanversendaal.com'
const dev = process.env.NODE_ENV !== 'production'

if (dev) {
  apiURL = 'http://api.ronanversendaal.com.test'
}

module.exports = {

  env: {
    baseURL: process.env.BASE_URL || 'localhost:3000',
    apiURL
  },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['vue-muuri-grid'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },

  // plugins: [{ src: '~/plugins/vue-muuri-grid.js', ssr: false }],
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Ronan Versendaal',
    titleTemplate: '%s - Ronan Versendaal',
    meta: [ // Each object in this array is its own meta tag
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'A skilled back end developer with skills in PHP and Javascript.'
      }
    ],
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'rgba(48, 126, 128, 0.5)' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: 'rgba(48, 126, 128, 0.5)'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],

  axios: {
    // proxyHeaders: false,
    baseURL: apiURL
  },

  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/vue-gallery', ssr: false }
  ],
  /*
  ** CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ]
}
