<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-4xl xl:text-4xl font-semibold">From the blog</h2>
      <p class="mt-4 mb-12">
        My personal blog, where I post about development, community management
        and other stuff.
      </p>
    </div>
    <ContentList path="/blog" v-slot="{ list }" :query="{ sort: { date: 1 } }">
      <div class="grid grid-cols-3 gap-12">
        <Card
          v-for="post in list"
          :key="post._path"
          :title="post.title"
          :path="post._path"
          :tag="post.tag"
          :date="post.date"
          :description="post.description"
        />
      </div>
    </ContentList>
  </div>
</template>
