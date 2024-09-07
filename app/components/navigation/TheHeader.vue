<script setup lang="ts">
const menu = ref(false)
interface HeaderLink {
  label: string
  href: string
  external?: boolean
}
const navigation: HeaderLink[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Uses',
    href: '/uses',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: 'https://dev.to/owlnai',
    external: true,
  },
]
</script>

<template>
  <div class="px-3 xl:px-0 fixed w-full top-0 z-1 relative print:hidden">
    <header class="backdrop-blur-sm z-1 container lg:mx-auto max-w-6xl flex justify-between py-3 dark:bg-zinc-900/30 bg-white/30 border border-zinc-300 dark:border-zinc-600 mt-8 rounded-full px-8 items-center">
      <div class="flex items-center">
        <NuxtLink
          class="text-lg lg:text-xl font-bold font-headings xl:text-2xl dark:text-zinc-200 "
          to="/"
        >
          Unai Mengual
        </NuxtLink>
      </div>
      <nav
        class="hidden lg:block"
        aria-label="Top"
      >
        <ul class="gap-x-2 flex">
          <li
            v-for="link in navigation"
            :key="link.label"
          >
            <NuxtLink
              :to="link.href"
              class="hover:text-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-400 transition-colors duration-200 rounded-full py-2 px-4"
              active-class="bg-zinc-200 dark:bg-zinc-800 "
            >
              {{ link.label }}
              <UnoIcon v-if="link.external" class="i-heroicons-arrow-top-right-on-square-20-solid" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="hidden sm:flex gap-3">
        <NuxtLink to="https://twitter.com/owln_ai" aria-label="My Twitter account">
          <UnoIcon class="i-ph-twitter-logo text-3xl hover:text-blue-400" />
        </NuxtLink>
        <utilitiesColorPicker />
      </div>
      <UnoIcon class="i-ph-list text-3xl !lg:hidden" @click="menu = !menu" />
    </header>
    <nav
      v-show="menu"
      class="!lg:hidden fixed dark:bg-zinc-900/30 bg-white/90 border border-zinc-300 dark:border-zinc-600 z-20 backdrop-blur-lg  w-[calc(100%_-_1.55rem)] rounded-lg left-3 mx-auto flex flex-col justify-between top-21"
      aria-label="Top"
    >
      <ul class="flex-col flex justify-center">
        <li
          v-for="link in navigation"
          :key="link.label"
          class="border-b border-zinc-300 dark:border-zinc-600"
        >
          <NuxtLink
            :to="link.href"
            class="hover:text-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-400 transition-colors duration-200 py-4 sm:py-6 inline-block px-8 font-medium text-lg w-full sm:text-xl"
            active-class="bg-zinc-200 dark:bg-zinc-800"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex sm:hidden gap-3 px-8 justify-between my-4">
        <NuxtLink to="https://twitter.com/owln_ai" class="hover:text-blue-400 inline-flex items-center gap-2">
          <UnoIcon class="ph-twitter-logo text-2xl" />
          @owln_ai
        </NuxtLink>
        <utilitiesColorPicker />
      </div>
    </nav>
  </div>
</template>
