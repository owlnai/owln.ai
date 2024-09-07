<script setup lang="ts">
import type { PostInjection } from '~/types'

const doc: PostInjection = inject('sharedPostData')
</script>

<template>
  <header v-if="doc" class="print:hidden">
    <div class="pb-8 border-b dark:border-zinc-500 border-zinc-300">
      <NuxtLink to="/" class="block">
        ← Go back
      </NuxtLink>
      <h1
        class="mt-6 text-4xl font-bold text-transparent font-headings 2xl:text-4xl magic w-full"
      >
        {{ doc.title }}
      </h1>
      <div
        class="flex flex-col sm:flex-row mt-6 text-md gap-3 sm:items-center justify-between"
      >
        <ul class="flex flex-wrap gap-4 text-sm w-full">
          <li class="flex items-center gap-2 font-medium">
            <UnoIcon class="i-ph-notepad-bold w-5 h-5" /> Written on
            {{
              new Date(doc.date).toLocaleDateString("en-US", {
                dateStyle: "long",
              }) || "an unknown date"
            }}
          </li>
          <li />
        </ul>
      </div>
    </div>
  </header>
</template>
