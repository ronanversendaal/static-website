module.exports = {
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
    // baseURL: 'http://api.ronanversendaal.com.test'
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
