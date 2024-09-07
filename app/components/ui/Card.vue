<script setup lang="ts">
import { ref } from 'vue'

const project = defineProps<{
  path: string
  title: string
  technologies?: string[]
  date: number
  thumbnail?: string
  type: string
  description?: string
  url?: string
}>()

const card = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(card)

const cardTransform = computed(() => {
  return isOutside.value
    ? ''
    : `radial-gradient(
      circle at
      ${elementX.value}px
      ${elementY.value}px,
      #ffffff55,
      #0000000f)`
})
</script>

<template>
  <NuxtLink
    ref="card"
    :to="project.path"
    class="relative flex flex-col justify-between h-auto gap-4 pt-4 overflow-hidden bg-white border isolate dark:bg-black border-zinc-300 dark:border-zinc-700 rounded-xl"
  >
    <div class="absolute top-0 left-0 z-20 w-full h-full glow" />
    <ul class="flex gap-2 px-4">
      <li>
        <uiBadge class="text-sm capitalize">
          <template v-if="project.type === 'website'">
            <UnoIcon class="i-heroicons-globe-alt-20-solid" /> Website
          </template>
          <template v-else-if="project.type === 'translation'">
            <UnoIcon class="i-ph-translate-bold" /> Translation
          </template>
        </uiBadge>
      </li>
      <li>
        <uiBadge
          v-if="project.technologies"
          class="text-sm"
          :icon="project.technologies[0]"
        >
          {{ project.technologies[0] }}
        </uiBadge>
      </li>
    </ul>
    <div class="px-4 @container">
      <h2 class="text-2xl @sm:text-2xl @sm:py-2 font-semibold text-black dark:text-white">
        {{ project.title }}
      </h2>
      <p class="text-sm">
        {{ project.description }}
      </p>
    </div>
    <NuxtImg
      :src="project.thumbnail || 'https://placekitten.com/268/168'"
      alt=""
      height="168"
      width="268"
      class="w-full border-t -z-1 border-zinc-300 dark:border-zinc-700"
    />
  </NuxtLink>
</template>

<style>
.glow {
  background-image: v-bind(cardTransform);
}
</style>
