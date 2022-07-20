<script lang="ts" setup>
defineProps({
  path: String,
  title: String,
  description: String,
  date: Number,
  thumbnail: String,
})
</script>
<template>
  <NuxtLink
    :to="path"
    class="col-span-1 flex overflow-hidden flex-col gap-2 bg-zinc-50/30 dark:bg-zinc-800/30 border border-zinc-500/30 rounded-lg transition-filter duration-200 hover:brightness-125">
    <img
    v-if="thumbnail"
    height="91"
    width="214"
    :alt="`${title} thumbnail`"
    class="w-full"
      :src="thumbnail"
     />
    <h1 class="px-6 pt-4 text-xl font-bold text-gray-800 dark:text-white/87">
      {{ title }}
    </h1>
    <p class="px-6 text-sm xl:text-base">{{ description }}</p>
    <div class="flex px-6 pb-3 flex-wrap mt-auto pt-3 justify-between">
      <time v-if="date" :datetime="date.toString()" class="block text-gray-500">
        {{ new Date(date).toLocaleDateString() }}
      </time>
      <span class="font-medium text-gray-800 dark:text-white/87">View more</span>
    </div>
  </NuxtLink>
</template>
image.png