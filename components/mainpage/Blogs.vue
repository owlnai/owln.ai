<template>
  <div class="w-full">
    <div
      class="flex flex-col items-center gap-4 mb-8 sm:flex-row sm:justify-between">
      <h2 class="text-4xl font-semibold dark:text-white/87">From the blog</h2>
      <NuxtLink to="/blog"><CustomButton>More posts</CustomButton></NuxtLink>
    </div>
    <div class="flex flex-col justify-between gap-4">
      <ContentList path="/blog" v-slot="{ list }" :query="{ limit: 3 }">
        <Card
          v-for="post in list"
          :key="post._path"
          :title="post.title"
          :path="post._path"
          :date="post.date"
          :description="post.description" />
      </ContentList>
    </div>
  </div>
</template>
