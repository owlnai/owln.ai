<template>
  <div class="flex gap-24">
    <article class="prose prose-md dark:text-white">
      <h1 class="font-titled !font-normal !mb-4 dark:!text-white">{{ post.title }}</h1>
      <span class="flex items-center text-sm">
        Posted at&nbsp;
        <time :datetime="post.date" class="text-gray-500">
          {{
            new Date(post.date).toLocaleDateString()
          }}
        </time>
        <template v-if="post.date != post.last">
          · Last edited at
          <time :datetime="post.date" class="text-gray-500">
            {{
              new Date(post.last).toLocaleDateString()
            }}
          </time>
        </template>
      </span>
      <nuxt-content :document="post" />
    </article>
    <div class="mx-auto">
      <h2 class="mt-1 mb-4 text-2xl xl:text-2xl font-titled">Other posts you may also like</h2>
      <n-link
        :to="'/blog/' + post.slug"
        class="block w-full max-w-sm p-6 transition duration-150 dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 min-h-44"
        :key="post.slug"
      >
        <article class="space-y-3">
          <h1 class="text-xl font-bold">{{ post.title }}</h1>
          <p class="text-sm xl:text-sm">{{ post.description }}</p>
          <time :datetime="post.date" class="block text-xs text-gray-500">
            {{
              new Date(post.date).toLocaleDateString()
            }}
          </time>
        </article>
      </n-link>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content('blog', params.slug).fetch();
    } catch {
      error({ message: 'Blog Post not found' });
    }

    return {
      post,
    };
  },
};
</script>