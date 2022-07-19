<script setup lang="ts">
import { ref } from "vue"
interface HeaderLink {
  label: string
  href: string
}
const links: HeaderLink[] = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Timeline",
    href: "https://timeline.owln.ai",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Uses",
    href: "/uses",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]
let menu = ref(false)
const showMenu = () => {
  menu.value = !menu.value
}
</script>
<template>
  <header
    class="flex flex-col justify-between pt-2 pb-4 mb-6 gap-12 border-b border-gray-3 lg:mb-10 lg:items-center lg:gap-12 lg:px-8 dark:border-gray-600 lg:flex-row">
    <div class="flex items-center justify-center gap-8">
      <NuxtLink
        class="flex items-center gap-4 text-xl font-semibold tracking- group lg:gap-12 xl:gap-4 xl:text-2xl dark:text-white/87"
        to="/">
        <nuxt-picture
          src="/unai.jpg"
          width="70"
          height="77"
          alt="Face drawing of Unai"
          :imgAttrs="{ class: 'w-12 rounded-full h-12 transition transform transition-300 group-hover:rotate-12 lg:w-auto' }" />Unai
        Mengual
      </NuxtLink>
      <UnoIcon
        class="i-carbon-menu cursor-pointer lg:hidden"
        @click="showMenu" />
    </div>
    <div class="hidden lg:flex lg:items-center" :class="menu && '!block'">
      <nav>
        <ul
          class="grid flex-row items-baseline grid-cols-3 gap-4 py-2 pr-6 my-4 font-medium text-gray-600 lg:my-0 lg:mt-0 justify-items-center lg:gap-8 lg:flex lg:flex-row dark:text-gray-400 text-md">
          <li v-for="link in links" :key="link.label">
            <NuxtLink
              :to="link.href"
              class="hover:text-gray-800 dark:hover:text-gray-200"
              >{{ link.label }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
    <ul class="flex items-center justify-center gap-5 py-2">
      <li>
        <a
          href="https://github.com/owlnai"
          rel="noopener"
          title="owlnai at GitHub">
          <UnoIcon class="i-carbon-logo-github w-8 h-8" />
        </a>
      </li>
      <li>
        <colorPicker />
      </li>
    </ul>
  </header>
</template>
