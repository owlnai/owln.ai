// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxthub/core', 
    '@nuxt/ui-pro', 
    '@nuxt/content'],
    nitro: {
      experimental: {
        openAPI: true
      }
    }
})