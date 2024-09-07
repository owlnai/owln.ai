<script setup lang="ts">
import type { PostInjection } from '~/types'

const doc: PostInjection = inject('sharedPostData')
</script>

<template>
  <header
    v-if="doc"
    class="pb-16 mb-8 lg:mb-0 border-b dark:border-zinc-700 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
  >
    <div class="space-y-4">
      <NuxtLink to="/" class="block">
        ← Go back
      </NuxtLink>
      <h1 class="!my-6 font-medium">
        <span
          class="text-sm sm:text-base bg-clip-text bg-gradient-to-b from-gray-200 to-sky-400 inline-block text-transparent"
        >{{ doc.title }}</span>
        ·
        <span
          class="text-sm sm:text-base bg-clip-text bg-gradient-to-b from-gray-200 to-pink-400 inline-block text-transparent"
        >{{ doc.url }}</span>
      </h1>
      <span
        class="text-2xl sm:text-3xl font-bold font-headings bg-clip-text text-transparent bg-gradient-to-b from-sky-300 to-pink-300"
      >{{ doc.description }}</span>
      <div class="grid grid-cols-2 justify-between">
        <section v-if="doc.technologies">
          <h2 class="font-medium">
            Technologies
          </h2>
          <ul class="space-y-3 mt-2">
            <li v-for="tech in doc.technologies" :key="tech">
              <uiBadge class="text-sm" :icon="tech">
                {{ tech }}
              </uiBadge>
            </li>
          </ul>
        </section>
        <section>
          <h2 class="font-medium">
            Year
          </h2>
          {{
            new Date(doc.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })
          }}
        </section>
      </div>
    </div>
    <div class="flex justify-center">
      <img :src="doc.thumbnail" class="rounded-2xl w-auto h-64 object-cover">
    </div>
  </header>
</template>
