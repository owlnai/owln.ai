<template>
  <div class="w-full">
    <div
      class="
        flex
        sm:flex-row
        flex-col
        sm:justify-between
        items-center
        mb-8
        gap-4
      "
    >
      <h2 class="text-4xl xl:text-5xl font-titled">From the blog</h2>
      <n-link
        to="/blog"
        class="
          font-semibold
          tracking-wider
          uppercase
          bg-white
          hover:bg-gray-100
          transition
          duration-150
          px-6
          py-2
          sm:px-8
          rounded-md
          border border-gray-200
          shadow-sm
          text-xs
          block
          sm:text-base
        "
        >More posts</n-link
      >
    </div>
    <div class="flex justify-between gap-8 flex-col">
      <n-link
        :to="'blog/' + post.slug"
        class="
          bg-white
          rounded-md
          border border-gray-200
          shadow-md
          w-full
          p-6
          min-h-44
        "
        v-for="post of posts"
        :key="post.slug"
      >
        <article class="space-y-3">
          <h1 class="text-3xl font-bold">{{ post.title }}</h1>
          <p class="xl:text-base text-sm">{{ post.description }}</p>
          <div class="flex justify-between">
            <time :datetime="post.date" class="text-gray-500 block">{{
              new Date(post.date).toLocaleDateString()
            }}</time>
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