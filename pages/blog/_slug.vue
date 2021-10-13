<template>
  <article class="prose prose-md max-w-none">
    <h1 class="font-titled !font-normal !mb-4">{{ post.title }}</h1>
    <span class="text-sm">
      Posted at
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