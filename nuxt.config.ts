// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Royal Care Kids Store | Baby & Mothercare Essentials',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Royal Care Kids Store — premium baby & mothercare essentials for your little royal. Clothing, accessories, gifts and care items. Fast delivery across Accra, Ghana.'
        },
        { name: 'theme-color', content: '#FF5F0F' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph defaults (pages override these with useHead)
        { property: 'og:site_name', content: 'Royal Care Kids Store' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_GH' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@RoyalCareKidsStore' },
        // Security
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' },
        { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-vibrant.png' },
        { rel: 'canonical', href: 'https://royalcarekidsstore.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
        }
      ]
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'gsap',
      ]
    }
  }
})
