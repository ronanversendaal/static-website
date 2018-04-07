import config from '~/config/config.js'

export default function ({ $axios, redirect }) {
  $axios.setToken(config.api.token, 'Bearer')
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      //   redirect('/400')
    }
  })
}
