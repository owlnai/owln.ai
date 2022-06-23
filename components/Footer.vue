<script setup lang="ts">
import { useCopyright } from "../composables/useCopyright"
const year = useCopyright()

interface footerLink {
  label: string
  icon: string
  href: string
}

const links: footerLink[] = [
  {
    label: "Prototyped on Figma",
    icon: "i-logos-figma",
    href: "https://figma.com",
  },
  {
    label: "Built with Nuxt.js",
    icon: "i-logos-nuxt-icon",
    href: "https://nuxtjs.org",
  },
  {
    label: "Hosted on Netlify",
    icon: "i-logos-netlify",
    href: "https://netlify.com",
  },
]
</script>
<template>
  <footer
    class="flex flex-col items-center justify-center gap-4 pt-6 mt-16 text-gray-600 border-t border-gray-300 dark:text-gray-200 dark:border-gray-600 lg:justify-between lg:flex-row"
  >
    <div>CC-BY-SA © {{ year }} Unai Mengual</div>
    <div>
      <ul
        class="flex flex-col items-center gap-3 sm:flex-row lg:justify-around"
      >
        <li v-for="link in links">
          <CustomButton>
            <a :href="link.href" rel="noopener" class="flex items-center">
             <UnoIcon class="w-6 h-5 inline-block mr-3" :class="link.icon "/>

              {{ link.label }}
            </a></CustomButton
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
