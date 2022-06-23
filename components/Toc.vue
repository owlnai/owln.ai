<script lang="ts" setup>
import { onMounted, reactive } from "vue"

defineProps({
  value: Object,
})
const observingHeadings = reactive(new Set())
onMounted(() => {
  const sections = document.querySelectorAll("h2, h3")
  const options = {
    threshold: 0.5,
  }
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) {
        observingHeadings.add(entry.target.id)
      } else {
        observingHeadings.delete(entry.target.id)
      }
    })
  }, options)
  sections.forEach((section) => {
    observer.observe(section)
  })
})
</script>
<template>
  <nav
    aria-label="Table of contents"
    class="hidden md:block md:sticky top-5 left-0 right-0 self-start text-sm"
  >
    <ul class="space-y-4">
      <li v-for="heading in value?.links" :key="heading.id">
        <NuxtLink :to="'#' + heading.id">
          <span
            class="font-semibold"
            :class="{ 'text-green-700 dark:text-green-300': observingHeadings.has(heading.id) }"
            >{{ heading.text }}</span
          ></NuxtLink
        >
        <ul
          v-if="heading.children"
          class="mt-8 lg:mt-2 space-y-2 border-l border-slate-300"
        >
          <li
            v-for="subheading in heading.children"
            :key="subheading.id"
            class="pl-4 -ml-px border-l border-gray-300 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
            :class="{
              'text-green-700 dark:text-green-300 border-green-300': observingHeadings.has(
                subheading.id
              ),
            }"
          >
            <NuxtLink :to="'#' + subheading.id">
              <span>{{ subheading.text }}</span></NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
