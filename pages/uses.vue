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
      post = await $content("uses").fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Not found" });
    }

    return {
      post,
    };
  },
};
</script>