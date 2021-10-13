<template>
  <div class="w-full">
    <div class="flex flex-col items-center gap-4 mb-8 sm:flex-row sm:justify-between">
      <h2 class="text-4xl xl:text-5xl font-titled">From the blog</h2>
      <n-link
        to="/blog"
        class="block px-6 py-2 text-xs font-semibold tracking-wider uppercase transition duration-150 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 sm:px-8 sm:text-base"
      >More posts</n-link>
    </div>
    <div class="flex flex-col justify-between gap-8">
      <n-link
        :to="'blog/' + post.slug"
        class="w-full p-6 bg-white border border-gray-200 rounded-md shadow-md min-h-44"
        v-for="post of posts"
        :key="post.slug"
      >
        <article class="space-y-3">
          <h1 class="text-3xl font-bold">{{ post.title }}</h1>
          <p class="text-sm xl:text-base">{{ post.description }}</p>
          <div class="flex justify-between">
            <time :datetime="post.date" class="block text-gray-500">
              {{
                new Date(post.date).toLocaleDateString()
              }}
            </time>
          </div>
        </article>
      </n-link>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    this.posts = await this.$content('blog')
      .limit(2)
      .sortBy('date', 'desc')
      .fetch();
  },
  data() {
    return { posts: null };
  },
};
</script>