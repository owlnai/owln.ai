<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary'
}>()

const variant = props.variant ?? 'primary'
</script>

<template>
  <span
    class="font-medium border-1 border-purple-800 dark:border-purple-400 text-sm sm:text-base font-sans rounded-full bg-cinder-50 text-cinder-900 px-5 py-2 max-w-[max-content] flex items-center gap-2 shadow-[0_4px_0_#767380] hover:brightness-115 active:translate-y-1 active:!shadow-none"
    :class="{ '!bg-cinder-900 !text-cinder-100 !shadow-[0_4px_0_#a288f2] !dark:shadow-[0_4px_0_#4e4174]': variant === 'secondary' }"
  >
    <slot />
  </span>
</template>
