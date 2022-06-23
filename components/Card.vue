<script lang="ts" setup>
defineProps({
  path: String,
  title: String,
  description: String,
  date: Number,
  thumbnail: String
})
</script>
<template>
  <NuxtLink
    :to="path"
    class="flex flex-col p-6 bg-zinc-50/30 dark:bg-zinc-800/30 border border-zinc-500/30 rounded-lg transition-filter duration-200 hover:brightness-125"
  >
    <article class="space-y-3">
      <img v-if="thumbnail" :src="thumbnail" class="object-cover aspect-16/9" />
      <div>
        <h1 class="text-2xl font-bold dark:text-white/87">
          {{ title }}
        </h1>
        <p class="text-sm xl:text-base">{{ description }}</p>
      </div>
      <div class="flex justify-between self-end">
        <time
          v-if="date"
          :datetime="date.toString()"
          class="block text-gray-500"
        >
          {{ new Date(date).toLocaleDateString() }}
        </time>
        <span class="font-medium">View more</span>
      </div>
    </article>
  </NuxtLink>
</template>
