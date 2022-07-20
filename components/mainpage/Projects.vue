<template>
  <div class="w-full">
    <div
      class="flex flex-col items-center gap-4 mb-8 sm:flex-row sm:justify-between">
      <h2 class="text-3xl 2xl:text-4xl text-gray-800 font-semibold dark:text-white/87">Latest projects</h2>
      <NuxtLink to="/projects"
        ><CustomButton>More projects</CustomButton></NuxtLink
      >
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 justify-between gap-4">
      <ContentList path="/projects" v-slot="{ list }" :query="{ limit: 4 }">
        <Card
          v-for="post in list"
          :key="post._path"
          :title="post.title"
          :thumbnail="post.thumbnail"
          :path="post._path"
          :date="post.date"
          :description="post.description" />
      </ContentList>
    </div>
  </div>
</template>
