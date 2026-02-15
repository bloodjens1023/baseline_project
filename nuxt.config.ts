// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'pt-BR', iso: 'pt-BR', file: 'pt-BR.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'pt-BR',
    langDir: 'locales/',
    detectBrowserLanguage: false // <-- désactive la détection
,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   fallbackLocale: 'pt-BR',
      
    // },
    
  },
   compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
