// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  ssr: true,
  
  app: {
    baseURL: '/',
    buildAssetsDir: '/assets/',
    head: {
      charset: 'utf-8',
      title: 'HertzBet',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
      meta: [
        {
          name: 'format-detection',
          content: 'telephone=no'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'theme-color',
          content: '#1a1a2e'
        }
      ],
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
          defer: true
        }
      ]
    }
  },

  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'ALLOWALL',
          'Content-Security-Policy': "frame-ancestors 'self' https://web.telegram.org https://t.me"
        }
      }
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/**': { ssr: false }
  },

  experimental: {
    payloadExtraction: false
  }
})

