<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-4xl xl:text-4xl font-semibold text-gray-800 dark:text-white/87">My projects</h2>
      <p class="mt-4 mb-12">Lists of things I've been working on</p>
    </div>
    <ContentList path="/projects" v-slot="{ list }">
      <div class="grid grid-cols-3 gap-12">
        <Card
          v-for="post in list"
          :key="post._path"
          :title="post.title"
          :path="post._path"
          :tag="post.tag"
          :thumbnail="post.thumbnail"
          :date="post.date"
          :description="post.description"
        />
      </div>
    </ContentList>
  </div>
</template>
