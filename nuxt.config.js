export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EvolveBPM',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap.css",
    "~/assets/css/animate.css",
    "~/assets/css/swiper-bundle.css",
    "~/assets/css/slick.css",
    "~/assets/css/nouislider.css",
    "~/assets/css/magnific-popup.css",
    "~/assets/css/font-awesome-pro.css",
    "~/assets/css/spacing.css",
    "~/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    // { src: '~/plugins/vue-backtotop', ssr: false },
  ],

  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: 'https://evolvestrapi.pbwebvision.in/api',
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    loaders: {
      vue: {
        prettify: false
      }
    }
  },
}
