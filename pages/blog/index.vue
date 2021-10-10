<template>
  <div class="flex justify-between gap-8 flex-col">
    <h2 class="text-4xl xl:text-5xl font-titled">From the blog</h2>
    <n-link
      :to="'blog/' + post.slug"
      class="
        bg-white
                hover:bg-gray-100
                transition
                duration-150
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
        <time :datetime="post.date" class="text-gray-500 block">{{
          new Date(post.date).toLocaleDateString()
        }}</time>
      </article>
    </n-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch()
    return {
      posts,
    }
  },
}
</script>