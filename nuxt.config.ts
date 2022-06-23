import { defineNuxtConfig } from "nuxt"
import {
  presetWebFonts,
  presetIcons,
  presetUno,
  presetTypography,
} from "unocss"
import transformerDirective from "@unocss/transformer-directives"

export default defineNuxtConfig({
  target: "static",
  components: {
    dirs: ["~/components", "~/components/icons"],
  },
  global: true,
  colorMode: {
    classSuffix: "",
  },
  modules: ["@nuxtjs/color-mode", "@unocss/nuxt", "@nuxt/content"],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
    plugins: ["~/server/plugins/content.ts"],
  },
  meta: {
    title: "Unai Mengual",
    htmlAttrs: {
      lang: "en",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Software Engineer, independent contractor,  OSS translator",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://pbs.twimg.com/profile_banners/732254337930547200/1633369617/1500x500",
      },
      { property: "twitter:site", content: "owln_ai" },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content:
          "https://pbs.twimg.com/profile_banners/732254337930547200/1633369617/1500x500",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "icon", href: "/avatar.svg" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },

  unocss: {
    preflight: true,
    transformers: [transformerDirective()],
    presets: [
      presetUno(),
      presetIcons({
        scale: 1.2,
        cdn: "https://esm.sh/",
      }),
      presetTypography(),
      presetWebFonts({
        provider: "google",
        fonts: {
          sans: [{ name: "Inter", weights: [400, 500, 600, 700] }],
        },
      }),
    ],
  },
})
