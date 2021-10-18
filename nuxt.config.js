export default {
  target: 'static',
  generate: { fallback: true },
  head: {
    title: 'Unai Mengual',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Software Engineer, independent contractor,  OSS translator' },
      { hid: 'og:image', property: "og:image", content: "https://pbs.twimg.com/profile_banners/732254337930547200/1633369617/1500x500" },
      { property: "twitter:site", content: "owln_ai" },
      { hid: 'twitter:image', property: "twitter:image", content: "https://pbs.twimg.com/profile_banners/732254337930547200/1633369617/1500x500" },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', href: '/avatar.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  tailwindcss: {
    viewer: false
  },
  components: true,
  colorMode: {
    classSuffix: ''
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: "https://owln.ai"
  }
}
