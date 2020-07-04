
export default {
//    server: {
//      port: 8000, // par défaut : 3000
//      host: '0.0.0.0' // par défaut : localhost
//    },
  mode: 'spa',
  /*
** Headers of the page
*/
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
** Customize the progress-bar color
*/
  loading: { color: '#fff' },
  /*
** Global CSS
*/
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
** Plugins to load before mounting the App
*/
  plugins: [
    // nuxt.config.js

    '~plugins/globalVars.js'
    // '~plugins/aos'
  ],
  /*
** Nuxt.js dev-modules
*/
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
** Nuxt.js modules
*/
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
** Build configuration
*/
  build: {
    /*
** You can extend webpack config here
*/
    extend (config, ctx) {
    }
  }
}
