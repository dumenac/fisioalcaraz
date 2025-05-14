import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-calendly'
  ],
  fonts: {
    families: [
      {
        name: 'Mansory',
        provider: 'local',
        weights: [400],
        styles: ['normal'],
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [200,300],
        styles: ['normal'],
      }
    ],
    defaults: {
      weights: [200,300],
      styles: ['normal'],
    }
  },
  i18n: {
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ca', iso: 'ca-ES', file: 'ca.json', name: 'Català' }
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'es'
    }
  }
})