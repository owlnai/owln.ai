<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <article class="scroll-smooth sm:px-8">
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-3xl text-center font-bold dark:text-white/87">
        {{ doc.title }}
      </h1>
      <div class="text-center mt-4 mb-8 flex flex-col">
        {{ doc.description
        }}<NuxtLink :to="doc.url" class="text-green-700 dark:text-green-300">{{
          doc.url
        }}</NuxtLink>
      </div>
      <div class="md:grid md:grid-cols-5 gap-12 relative mx-auto">
        <Toc :value="doc.body.toc" v-if="doc.body.toc.links.length" />

        <div
          :class="
            doc.body.toc.links.length && !doc.disableSidebar
              ? 'col-span-3'
              : 'col-span-4'
          ">
          <div
            class="p-4 bg-zinc-50/30 dark:bg-zinc-800/30 border border-zinc-500/30 sm:px-8 sm:shadow sm:rounded-lg mb-4">
            <ContentRenderer
              :value="doc"
              class="prose dark:prose-invert max-w-3xl dark:text-white/87"
              id="doc" />
          </div>
        </div>

        <ul
          class="md:block text-sm space-y-2 md:sticky top-5 left-0 right-0 self-start"
          v-if="!doc.disableSidebar">
          <li class="flex gap-2 items-center">
            <UnoIcon class="i-carbon-notebook" /> Written on
            {{
              new Date(doc.date).toLocaleDateString("en-US") ||
              "an unknown date"
            }}
          </li>
          <li class="flex gap-2 items-center" v-if="doc.updated">
            <UnoIcon class="i-carbon-edit" /> Last edited on
            {{ new Date(doc.updated).toLocaleDateString("en-US") }}
          </li>
          <li>
            <!-- Thank you antfu :P -->
            <NuxtLink
              :to="`https://twitter.com/intent/tweet?text=Reading%20%40owln_ai's%20https%3A//owln.ai${route.path}`"
              class="flex gap-2 items-center hover:text-green-700 dark:hover:text-zinc-200">
              <UnoIcon class="i-carbon-logo-twitter" /> Comment on
              Twitter</NuxtLink
            >
          </li>
        </ul>
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
article #toc img {
  margin-top: 10px;
}
article #doc h3 a {
  font-weight: 600;
}
article #doc :where(h2, h3) a {
  font-weight: 700;

  text-decoration: none;
}
</style>
