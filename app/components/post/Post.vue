<script setup lang="ts">
import type { Post } from '~/types'

defineProps<{ project?: boolean }>()

const el = ref()
const { path } = useRoute()

const { data: doc } = await useAsyncData(`content-${path}`, () => {
  return queryContent<Post>().where({ _path: path }).findOne()
})

provide('sharedPostData', doc)
</script>

<template>
  <article
    class="mx-auto container max-w-6xl pt-6 lg:pt-16 sm:py-8 px-6 2xl:px-0 print:p-0 relative isolate overflow-hidden"
  >
    <postLightRays />
    <template v-if="doc">
      <OgImage component="PageOgImage" />
      <PostHeaderProject v-if="project" style="--stagger: 1" data-animate />
      <PostHeader v-else style="--stagger: 1" data-animate />
      <div
        class="relative flex flex-col-reverse gap-6 mx-auto lg:grid lg:grid-cols-4"
      >
        <div class="pt-10 print:p-0 lg:col-span-3 relative isolate">
          <Lede style="--stagger: 2" data-animate>
            {{ doc.description }}
          </Lede>
          <ContentRenderer
            id="doc"
            ref="el"
            :value="doc"
            class="prose text-gray-800 dark:text-gray-200/95 max-w-65ch text-lg xl:text-xl"
            style="--stagger: 3"
            data-animate
          />
        </div>
        <div class="flex relative">
          <LegoPageProgress v-slot="{ progress }" :target="el" class="hidden lg:block">
            <div
              class="absolute left-0 bottom-0 h-full w-1px dark:bg-zinc-500 bg-zinc-300 overflow-hidden"
            >
              <div
                class="w-full bg-gradient-to-t from-sky-400 to-pink-400"
                :style="{ height: `${progress}%` }"
              />
            </div>
          </LegoPageProgress>
          <postAside
            style="--stagger: 2"
            data-animate
          />
        </div>
      </div>
    </template>
  </article>
</template>

<style scoped>
.prose :deep(a) {
  color: #4491d8;
}

.prose :deep(h2 > a) {
  text-decoration: none;
  font-weight: 600;
}

.dark .prose :deep(:where(h2, h3) a) {
  color: white;
}
.light .prose :deep(:where(h2, h3) a) {
  color: black;
}

.prose :deep(h3 > a) {
  text-decoration: none;
  font-weight: 500;
}
</style>
