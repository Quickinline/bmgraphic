
export default {
  server: {
    port: 8000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },
  target: 'static',
  // mode: 'spa', < -- depreceated
  ssr: false,

  generate: {
    routes: [
      '/services/communication-visuelle',
      '/services/impression-numérique-et-offset',
      '/services/impression-grand-format',
      '/services/développement-logiciel',
      '/services/enseignes-&-signalétique',
      '/services/Marquage-véhicules',
      '/services/PLV-événementiel',
      '/services/marquage-textile',
      '/services/Stickers-et-Décoration',
      '/services/cuisines-&-Meubles',
      '/services/traitement-de-façade',
      '/services/aménagement-intérieur-extérieur'
    ]
  },

  /*
    ** Headers of the page
    */
  head: {
    title: 'BMGraphic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BM Graphic spécialisée dans l’impression publicitaire, La bonne adresse pour toutes vos impressions ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    // script: [
    //   {
    //     src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    //   }
    // ]
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
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],
  // Internationalization options
  i18n: {
    locales: ['fr', 'it'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr'
      // messages: {
      //   it: {
      //     welcome: 'Bienvenuto'
      //   }
      // }
    }

  },
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
