<script setup lang="ts">
const images = [
  {
    src: '/pixels/content.png',
    key: 'Content creation',
    coords: 'left-25 2xl:left-40 top-55',
  },
  {
    src: '/pixels/figma.png',
    key: 'UX/UI design',
    coords: 'left-70 2xl:left-80 bottom-100 2xl:bottom-80',
  },
  {
    src: '/pixels/nuxt.png',
    key: 'Full-stack website development',
    coords: 'right-20 2xl:right-40 top-80',
  },
  {
    src: '/pixels/i18n.png',
    key: 'i18n and l10n.',
    coords: 'right-70 2xl:right-80 bottom-90',
  },
]
</script>

<template>
  <section
    class="relative container mx-auto flex flex-col items-center justify-center w-full gap-8 sm:gap-10 pt-12 pb-16 font-sans md:pb-24 md:pt-16 lg:pb-42 lg:pt-30 isolate gradient px-6 2xl:px-0"
    aria-label="My abilities"
  >
    <div class="max-w-3xl flex flex-col gap-6 sm:gap-12 mb-8">
      <h1
        class="text-4xl sm:text-5xl font-bold font-headings 2xl:text-6xl magic text-center"
        style="--stagger:1" data-animate
      >
        Turning dreams into digital realities
      </h1>
      <p class="prose text-center text-lg sm:text-2xl leading-8 dark:text-gray-300" style="--stagger:2" data-animate>
        Owl of the open-source, front-end developer and UX/UI designer
      </p>
      <div class="flex gap-3 items-center justify-center" style="--stagger:3" data-animate>
        <NuxtLink to="mailto:hi@owln.ai">
          <uiNotReallyAButton>
            <UnoIcon
              class="i-ph-envelope text-xl sm:text-2xl"
            />Contact me
          </uiNotReallyAButton>
        </NuxtLink>
        <NuxtLink to="https://resume.owln.ai">
          <uiNotReallyAButton variant="secondary">
            View CV
          </uiNotReallyAButton>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/about" aria-label="More about me">
      <nuxt-img
        src="/pixels/owl.png"
        height="288"
        width="198"
        alt="A pixelated purple eagle owl"
        aria-hidden="true"
        class="dark:brightness-90 pixelated h-72 hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out "
      />
    </NuxtLink>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 2xl:space-x-0 2xl:mt-0">
      <nuxt-img
        v-for="image in images"
        :key="image.key"
        :alt="image.key"
        :src="image.src"
        class="pixelated h-20 xl:absolute hover:brightness-125 cursor-help floating inline-block"
        :title="image.key"
        :class="image.coords"
        height="80"
        width="80"
      />
    </div>
  </section>
</template>

<style scoped>
.pixelated {
  image-rendering: pixelated;
}

.gradient {
  background: radial-gradient(#7856d428 20%, transparent 70%);
}
</style>
