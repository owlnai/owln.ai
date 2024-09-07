<script setup lang="ts">
import type { PostInjection } from '~/types'

const doc: PostInjection = inject('sharedPostData')
const { activeHeadings, updateHeadings } = useScrollspy()
if (process.client) {
  setTimeout(() => {
    updateHeadings([
      ...document.querySelectorAll(' h2'),
      ...document.querySelectorAll(' h3'),
    ])
  }, 300)
}
</script>

<template>
  <div v-if="doc?.body.toc" class="pb-3 mb-6 border-b dark:border-zinc-500 border-zinc-300">
    <span class="text-sm font-bold tracking-tight">
      On this page
    </span>
    <section
      v-for="(link, index) in doc.body.toc.links"
      :key="link.id"
      class="my-4 text-sm"
    >
      <h2 class="font-medium">
        <NuxtLink
          :class="[activeHeadings.includes(link.id) && 'dark:text-zinc-200']"
          :to="`#${link.id}`"
          class="hover:text-blue-500 dark:hover:text-zinc-200"
        >
          {{ index + 1 }}. {{ link.text }}
        </NuxtLink>
      </h2>
      <div v-if="link.children" class="pl-2 ml-4 border-l border-current">
        <h3 v-for="(sublink, subindex) in link.children" :key="sublink.id">
          <NuxtLink
            :to="`#${sublink.id}`"
            class="block my-1 hover:text-blue-500 dark:hover:text-zinc-200"
          >
            {{ index + 1 }}.{{ subindex + 1 }} - {{ sublink.text }}
          </NuxtLink>
        </h3>
      </div>
    </section>
  </div>
</template>
