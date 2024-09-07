<script setup lang="ts">
const { icon } = defineProps<{
  icon?: string
}>()

const icons = {
  supabase: 'i-logos-supabase-icon',
  tailwindcss: 'i-logos-tailwindcss-icon',
  nuxt: 'i-logos-nuxt-icon',
  webassembly: 'i-logos-webassembly',
}
</script>

<template>
  <span class="font-medium bg-white dark:bg-zinc-900 box-decoration-clone rounded-full py-1 px-4 border-zinc-300 border dark:border-zinc-700">
    <UnoIcon v-if="icon" :class="icons[icon.toLowerCase()]" class="w-4 h-4 mr-1" />
    <slot />
  </span>
</template>
