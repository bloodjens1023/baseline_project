export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      apiBase: '/dev-api',
      locale: 'pt-br',
      env: 'production',
      skin: '73',
      gameURL: 'https://t.pg-nmgas.com',
      assetsURL: 'https://downpg117.sp-slots1.com/source/public',
      imageAssetsURL: 'https://downpg117.sp-slots1.com/cdn-cgi/image/format=auto/source/public',
      wsURL: 'wss://wspg117.spiritapis.com/net',
      url: 'https://pg117.bet',
      name: 'PG117',
      protocolName: 'pg117',
      theme: '#182877'
    }
  },

  i18n: {
    locales: [
      { code: 'pt-br', name: 'Português', iso: 'pt-BR', file: 'pt-BR.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'pt-br',
    langDir: 'locales/',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
