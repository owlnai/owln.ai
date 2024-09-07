<script setup>
const { data: blogData } = await useFetch('https://dev.to/api/articles', {
  query: {
    username: 'owlnai',
    per_page: '3',
    pagination: '1',
  },
})
</script>

<template>
  <section
    class="border-t border-sky-400 dark:border-sky-900 bg-sky-50/50 dark:bg-#031621/30 dark:[background-image:radial-gradient(54.75%_54.75%_at_52.02%_-13.74%,_#12223d_0%,_rgba(26,_20,_48,_0)_100%)]"
  >
    <div
      class="relative container mx-auto flex flex-col lg:flex-row max-w-6xl justify-between w-full gap-10 py-16 font-sans md:py-24  isolate px-6 2xl:px-0"
    >
    <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-y-5">
        <h2 class="text-3xl font-semibold font-headings 2xl:text-5xl magic">
          My latest projects
        </h2>
        <p
          class="prose text-lg sm:text-lg leading-8 dark:text-gray-300 max-w-43ch"
        >
        From open-source projects to websites and apps. I love to create and share my work with the world.
        </p>

      </div>
        <nav aria-label="Latest 4 blog entries">
          <ContentList path="/projects" v-slot="{ list }">
          <ol class="divide-y-2 divide-sky-900">
            <li v-for="post in list" :key="post.title" class="relative py-6">
              <div class="max-w-lg">
                <NuxtLink :to="post.url" class="space-y-2">
                  <div class="flex flex-wrap justify-between">
                    <h1
                      class="text-2xl font-headings font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {{ post.title }}
                    </h1>
                  </div>
                  <div class="text-gray-500 capitalize">
                    {{ post.type }} · {{ post.description }}
                  </div>
                  <div class="flex flex-wrap justify-between">
                    <span
                      class="underline font-medium underline-offset-3 text-sky-500 dark:text-sky-400"
                    >Read more -></span>
                  </div>
                </NuxtLink>
              </div>
            </li>
          </ol>
          </ContentList>
          <NuxtLink to="https://dev.to/owlnai">
          <uiNotReallyAButton class="mt-4">
            Browse all blog posts
          </uiNotReallyAButton>
        </NuxtLink>
        </nav>
      </div>
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-y-5">
        <h2 class="text-3xl font-semibold font-headings 2xl:text-5xl magic">
          My latest blogs
        </h2>
        <p
          class="prose text-lg sm:text-lg leading-8 dark:text-gray-300 max-w-43ch"
        >
        Posts about front-end development, design, and open-source projects.
      </p>

      </div>
        <nav aria-label="Latest 4 blog entries">
          <ol class="divide-y-2 divide-sky-900">
            <li v-for="post in blogData" :key="post.title" class="relative py-6">
              <div class="max-w-lg">
                <NuxtLink :to="post.url" class="space-y-2">
                  <div class="flex flex-wrap justify-between">
                    <h1
                      class="text-2xl font-headings font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {{ post.title }}
                    </h1>
                  </div>
                  <div class="text-gray-500">
                    <time
                      v-if="post.created_at"
                      :datetime="post.created_at"
                    >
                      {{
                        new Date(post.created_at).toLocaleDateString(
                          "en-US",
                          {
                            dateStyle: "long",
                          },
                        )
                      }}
                    </time>
                    · {{ post.reading_time_minutes }} minutes read · {{ post.positive_reactions_count }} <UnoIcon class="i-ph-thumbs-up-bold" />
                  </div>

                  <p class="pb-2">
                    {{ post.description }}
                  </p>
                  <div class="flex flex-wrap justify-between">
                    <div class="flex flex-row gap-2">
                      <span
                        v-for="tag in post.tags.split(', ')"
                        :key="tag"
                        class="px-4 py-1 text-xs font-medium tracking-wide lowercase border rounded-full text-gray-800 border-gray-300 dark:border-gray-600/50 dark:text-gray-200/90 bg-gray-50 dark:bg-gray-800/40"
                      >
                        #{{ tag }}
                      </span>
                    </div>
                    <span
                      class="underline font-medium underline-offset-3 text-sky-500 dark:text-sky-400"
                    >Read more -></span>
                  </div>
                </NuxtLink>
              </div>
            </li>
          </ol>
          <NuxtLink to="https://dev.to/owlnai">
          <uiNotReallyAButton class="mt-4">
            Browse all projects
          </uiNotReallyAButton>
        </NuxtLink>
        </nav>
      </div>
    </div>
  </section>
</template>
