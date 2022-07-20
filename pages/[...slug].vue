<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <article class="scroll-smooth sm:px-8">
    <ContentDoc v-slot="{ doc }">
      <div class="mt-8 mb-8 pb-8 border-b dark:border-gray-700">
      <NuxtLink to="/">← Go back</NuxtLink>
        <h1 class="text-gray-800 text-4xl 2xl:text-5xl font-bold dark:text-white/87 mt-3">
          {{ doc.title }}
        </h1>
        <div class="flex flex-col text-md mt-4">
          {{ doc.description
          }}<NuxtLink :to="doc.url" v-if="doc.url" class="text-blue-500 dark:text-blue-300">{{
            doc.url
          }}</NuxtLink>
        </div>
      </div>
      <div class="relative mx-auto flex flex-col-reverse lg:flex-row gap-12">
        <ContentRenderer
          :value="doc"
          class="prose dark:prose-invert max-w-3xl dark:text-gray-300 text-base 2xl:text-lg"
          id="doc" />
        <aside class="border-l dark:border-gray-700 pl-12">
          <ul class="text-sm flex flex-col gap-4" v-if="!doc.disableSidebar">
            <li class="flex gap-2 items-center font-medium">
              <UnoIcon class="i-carbon-notebook" /> Written on
              {{
                new Date(doc.date).toLocaleDateString("en-US") ||
                "an unknown date"
              }}
            </li>
            <li class="flex gap-2 items-center font-medium" v-if="doc.updated">
              <UnoIcon class="i-carbon-edit" /> Last edited on
              {{ new Date(doc.updated).toLocaleDateString("en-US") }}
            </li>
            <li class="font-medium">
              <!-- Thank you antfu :P -->
              <NuxtLink
                :to="`https://twitter.com/intent/tweet?text=Reading%20%40owln_ai's%20https%3A//owln.ai${route.path}`"
                class="flex gap-2 items-center hover:text-blue-500 dark:hover:text-zinc-200">
                <UnoIcon class="i-carbon-logo-twitter" /> Comment on
                Twitter</NuxtLink
              >
            </li>
          </ul>
        </aside>
      </div>
    </ContentDoc>
  </article>
</template>
<style>
article #doc h2 {
  font-weight: 700;
}
article #doc strong {
  @apply dark:text-white;
}
article #doc img {
  border-radius: 10px;
}

article #doc a {
  @apply text-blue-500;
}

article #doc h3 a {
  font-weight: 600;
}

article #doc :where(h2, h3) a {
  @apply text-gray-700 font-bold dark:text-white;
  text-decoration: none;
}
</style>
