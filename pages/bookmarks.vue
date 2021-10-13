<template>
  <article class="prose prose-md">
    <h1 class="font-titled !font-normal">{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("bookmarks").fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch {
      error({ message: "Not found" });
    }

    return {
      post,
    };
  },
};
</script>