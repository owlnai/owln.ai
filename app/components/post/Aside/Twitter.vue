<script setup lang="ts">
import type { PostInjection } from '~/types'

const doc: PostInjection = inject('sharedPostData')

const twitterShareURL = computed(() => {
  if (!doc)
    return ''

  const URLParams = new URLSearchParams({
    text:
        `Reading ${doc.title} by @owln_ai on https://owln.ai

        ${doc._path}`,
  })

  return `https://twitter.com/intent/tweet?${URLParams}`
})
</script>

<template>
  <NuxtLink
    v-if="doc"
    :to="twitterShareURL"
    class="block mt-3 font-bold tracking-tight text-sm hover:text-blue-500 dark:hover:text-blue-400"
  >
    <UnoIcon class="i-ph-x-logo-bold w-5 h-5 mr-2" /> Comment on X
  </NuxtLink>
</template>
