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
      title: 'Royal Care Kids Store | Baby & Mothercare Essentials',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { 
          hid: 'description', 
          name: 'description', 
          content: 'Royal Care Kids Store - Baby & mothercare essentials for your little royal 🍼 Clothing • Accessories • Gifts • Care items | Located in Accra.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-vibrant.png' },
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
