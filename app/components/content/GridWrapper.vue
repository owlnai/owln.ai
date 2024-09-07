<script setup lang="ts">
const props = defineProps<{ num?: string }>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-4" :class="{ [`lg:grid-cols-${props.num}`]: props.num }">
    <slot />
  </div>
</template>
