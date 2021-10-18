<template>
  <div class="flex flex-col justify-between gap-8 mx-auto">
    <h2 class="text-4xl xl:text-5xl font-titled">From the blog</h2>
    <n-link
      :to="'/blog/' + post.slug"
      class="w-full max-w-3xl p-6 transition duration-150 dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100 min-h-44"
      v-for="post of posts"
      :key="post.slug"
    >
      <article class="space-y-3">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <p class="text-sm xl:text-base">{{ post.description }}</p>
          <div class="flex justify-between">
            <time :datetime="post.createdAt" class="block text-gray-500">
              {{
                new Date(post.createdAt).toLocaleDateString()
              }}
            </time>
            <ul class="space-x-1">
              <li
                v-for="tag in post.tags.split(' ')"
                :key="tag"
                class="inline-block px-3 py-2 mr-2 text-xs text-white bg-black rounded-md dark:text-black dark:bg-white"
              >{{ tag }}</li>
            </ul>
          </div>
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