<script setup>
const posts = await queryContent('projects').find()

const { repos, pending } = await useGithubRepos()
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center w-full gap-4 sm:gap-10 pt-12 pb-16 font-sans md:pb-24 md:pt-16 lg:pb-30 lg:pt-30 isolate gradient px-6 2xl:px-0 overflow-hidden"
  >
    <div class="relative isolate flex flex-col items-center">
      <div
        class="absolute w-full h-full -z-1 left-0 top-25 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.8)_0%,_rgba(34,_57,_16,_0)_100%)]"
      />
      <div
        class="max-w-3xl flex flex-col items-center justify-center gap-4 sm:gap-8 mb-8 relative"
      >
        <h1
          class="text-4xl sm:text-5xl font-bold font-headings 2xl:text-6xl magic text-center"
          style="--stagger: 1"
          data-animate
        >
          I work on projects that make a difference
        </h1>
        <p
          class="prose text-center text-lg sm:text-2xl leading-8 dark:text-gray-300"
          style="--stagger: 2"
          data-animate
        >
          UI designs, full-stack web apps, technical translations and more
        </p>
      </div>
      <div class="w-full max-w-6xl relative my-6 lg:my-24">
        <div class="absolute top-0 -left-8 text-2xl floating">
          ✨
        </div>
        <div
          class="absolute -bottom-10 -right-8 transform-scale-x-[-1] text-2xl floating"
        >
          ✨
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-4 w-full lg:h-90"
          style="--stagger: 3"
          data-animate
        >
          <uiCard
            v-for="post in posts"
            :key="post._path"
            :path="post._path"
            class="mt-6"
            v-bind="post"
          />
        </div>
      </div>
    </div>
    <div
      class="w-full mt-2 flex flex-col container max-w-4xl justify-center relative"
    >
      <div
        class="absolute w-sm h-full -z-1 left-30 bottom-30 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"
      />
      <div
        class="absolute w-sm h-full -z-1 right-40 top-70 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"
      />
      <div
        class="flex flex-col w-full max-w-6xl sm:items-center gap-y-6 sm:justify-center"
      >
        <h2
          class="text-3xl font-semibold font-headings 2xl:text-5xl magic"
          style="--stagger: 4"
          data-animate
        >
          Open-source projects
        </h2>
        <p
          class="prose sm:text-center text-lg sm:text-xl leading-8 dark:text-gray-300 max-w-43ch"
          style="--stagger: 5"
          data-animate
        >
          Star my projects on GitHub if you find them useful!
        </p>
      </div>
      <GridWrapper num="3" class="mt-12" style="--stagger: 6" data-animate>
        <template v-if="pending">
          <GridElement v-for="i in 8" :key="i" class="min-h-[130px] animate-pulse" />
        </template>
        <template v-else>
          <GridElement v-for="repo in repos" :key="repo.id">
            <template #type>
              <div class="items-center flex justify-between">
                <NuxtLink :to="repo.stargazers_url" aria-label="Stargazers">
                  <UnoIcon class="i-ph-star-bold" />
                  {{ repo.stargazers_count }}
                </NuxtLink>
                <NuxtLink
                  v-if="repo.homepage"
                  aria-label="Homepage"
                  class="lowercase"
                  :to="repo.homepage"
                >
                  {{ repo.homepage.substring(8) }}
                </NuxtLink>
              </div>
            </template>
            <template #description>
              <NuxtLink :to="repo.html_url">
                {{ repo.description }}
              </NuxtLink>
            </template>

            <template #default>
              <NuxtLink :to="repo.html_url">
                {{ repo.name }}
              </NuxtLink>
            </template>
          </GridElement>
        </template>
      </GridWrapper>
    </div>
  </div>
</template>
