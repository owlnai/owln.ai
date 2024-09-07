<script setup lang="ts">
const items = [{
  title: 'resume.owln.ai',
  url: 'https://resume.owln.ai',
  desc: 'My life in a nutshell',
  icon: 'i-ph-read-cv-logo-bold',
},
{
  title: 'sitemap.xml',
  url: 'https://owln.ai/sitemap.xml',
  desc: 'All the pages on this site',
  icon: 'i-ph-map-trifold-bold',
},
{
  title: 'owlnai/awesome',
  url: 'https://github.com/owlnai/awesome',
  desc: 'A curated list of tools',
  icon: 'i-ph-sunglasses-bold',
},
{
  title: 'owlnai/owln.ai',
  url: 'https://github.com/owlnai/owln.ai',
  desc: 'The source code',
  icon: 'i-ph-github-logo-bold',
},
]
</script>

<template>
  <section class="border-t border-cinder-500 dark:[background-image:radial-gradient(54.75%_54.75%_at_52.02%_-13.74%,_#1A1430_0%,_rgba(26,_20,_48,_0)_100%)]">
    <div
      class="relative container mx-auto flex flex-col sm:items-center  justify-center w-full gap-10 py-16 font-sans md:pt-24 lg:pt-32 isolate px-6 2xl:px-0 pb-12"
    >
      <div
        class="flex flex-col w-full max-w-6xl sm:items-center gap-y-6 sm:justify-center"
      >
        <UnoIcon
          class="-z-1 i-ph-link-simple-duotone?mask text-6xl bg-gradient-to-br from-cinder-500 via-cinder-300 dark:via-cinder-900 dark:to-zinc-900 to-zinc-300 w-48 h-48 absolute top-8 light:opacity-30 left-1/2 -translate-x-1/2 hidden sm:block"
        />
        <h2 class="text-3xl font-semibold font-headings 2xl:text-5xl magic">
          Quick links
        </h2>
        <p class="prose sm:text-center text-lg sm:text-xl leading-8 dark:text-gray-300 max-w-43ch">
          A list of links to my projects, social media, and more.
        </p>
      </div>
      <nav>
        <GridWrapper num="4">
          <NuxtLink
            v-for="item in items" :key="item.title"
            :to="item.url"
          >
            <GridElement>
              <template #type>
                <UnoIcon :class="item.icon" class=" text-2xl" />
              </template>
              <template #description>
                {{ item.desc }}
              </template>
              <template #default>
                {{ item.title }}
              </template>
            </GridElement>
          </NuxtLink>
        </GridWrapper>
      </nav>
    </div>
  </section>
</template>
