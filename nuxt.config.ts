import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
    typedPages: true,
  },

  extends: ["nuxt-lego"],

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  routeRules: {
    "/**": { isr: true },
    "/projects": { isr: 3600 },
  },

  modules: ["@unocss/nuxt", "@nuxt/content", "@nuxtjs/seo", [
    "@nuxtjs/color-mode",
    {
      classSuffix: "",
    },
  ], "@vueuse/nuxt", "@nuxt/image"],

  runtimeConfig: {
    lastfmKey: "",
  },

  site: {
    url: "https://owln.ai/",
    name: "Unai Mengual",
    description: "Owl of the open-source, webdev, UI designer, translator.",
    defaultLocale: "en-US",
  },

  css: ["@unocss/reset/tailwind.css"],

  devtools: {
    enabled: true,
  },

  compatibilityDate: "2024-09-07",
});