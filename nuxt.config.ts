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
      theme: '#182877',

      activeTheme: 'dark',

      themes: {
        default: {
          primary: '#1E88E5',
          secondary: '#43A047',
          background: '#061237',
          text: '#212121'
        },
        dark: {
          primary: '#FF5722',
          secondary: '#FFC107',
          background: '#121212',
          text: '#E0E0E0'
        },
        ocean: {
          primary: '#0288D1',
          secondary: '#26C6DA',
          background: '#E1F5FE',
          text: '#01579B'
        }
      }
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
