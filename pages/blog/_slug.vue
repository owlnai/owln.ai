<template>
  <div class="flex flex-col sm:flex-row sm:gap-24">
    <div class="space-y-4">
      <ul class="space-x-1">
        <li
          v-for="tag in post.tags.split(' ')"
          :key="tag"
          class="inline-block px-3 py-2 mr-2 text-xs text-white bg-black rounded-md dark:text-black dark:bg-white"
        >{{ tag }}</li>
      </ul>
      <article class="prose prose-md dark:text-white">
        <h1 class="font-titled !font-normal !mb-4 dark:!text-white">{{ post.title }}</h1>
        <span class="flex items-center text-sm">
          Posted at&nbsp;
          <time class="text-gray-500">
            {{
              new Date(post.date).toLocaleDateString()
            }}
          </time>
          <template v-if="post.date != post.updated">
            &nbsp;· Last edited at&nbsp;
            <time class="text-gray-500">
              {{
                new Date(post.updated).toLocaleDateString()
              }}
            </time>
          </template>
        </span>
        <nuxt-content :document="post" />
      </article>
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
      relatedPost
    };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'og:image',
          property: "og:image",
          content: `https://og-image-owlnai.vercel.app/**${this.post.title}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fowln.ai%2Fog.svg&widths=auto&heights=300`
        },
        {
          hid: 'twitter:image',
          property: "twitter:image",
          content: `https://og-image-owlnai.vercel.app/**${this.post.title}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fowln.ai%2Fog.svg&widths=auto&heights=300`
        },

        {
          property: 'article:published_time',
          content: this.post.date,
        },
        {
          hid: 'description',
          name: 'description',
          content: `Unai Mengual: ${this.post.description || 'A new blog post is here'}`,
        },
        {
          property: 'article:modified_time',
          content: this.post.updated,
        },
        {
          property: 'article:tag',
          content: this.post.tags ? this.post.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Unai Mengual' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.post.tags ? this.post.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>
