import colors from 'vuetify/es5/util/colors'
import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}

export default {
  mode: 'universal',
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || '',
    script: [{ src: 'https://js.stripe.com/v3/' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: {
    routes: dynamicRoutes
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [`~/plugins/currency-filter.js`],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
