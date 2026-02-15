// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'pt-BR', name: 'Português', iso: 'pt-BR', file: 'pt-BR.json' },  // 👈 code: 'pt' au lieu de 'pt-BR'
      
    ],
    defaultLocale: 'pt-BR',  // 👈 changer aussi ici
    langDir: 'locales/',
    strategy: 'prefix_except_default', // ou 'prefix'
    detectBrowserLanguage: false
  },
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})