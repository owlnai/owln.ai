<script setup lang="ts">
interface HeaderLink {
  label: string
  href: string
  external?: boolean
}
const navigation: HeaderLink[] = [
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
      <div class="hidden sm:flex gap-4">
        <NuxtLink to="https://twitter.com/owln_ai" aria-label="My Twitter account">
          <UnoIcon class="i-lucide-twitter text-2xl hover:text-blue-400" />
        </NuxtLink>
        <NuxtLink to="https://github.com/owlnai" aria-label="My GitHub account">
          <UnoIcon class="i-lucide-github text-2xl hover:text-gray-400" />
        </NuxtLink>
        <utilitiesColorPicker />
      </div>
    </header>
  </div>
</template>
