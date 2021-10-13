<template>
  <div class="flex flex-col justify-between gap-8">
    <h2 class="text-4xl xl:text-5xl font-titled">From the blog</h2>
    <n-link
      :to="'blog/' + post.slug"
      class="w-full p-6 transition duration-150 bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100 min-h-44"
      v-for="post of posts"
      :key="post.slug"
    >
      <article class="space-y-3">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <p class="text-sm xl:text-base">{{ post.description }}</p>
        <time :datetime="post.date" class="block text-gray-500">
          {{
            new Date(post.date).toLocaleDateString()
          }}
        </time>
      </article>
    </n-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch();
    return {
      posts,
    }
  },
}
</script>