<template>
  <div class="flex items-center w-full">
    <h2 class="text-xl font-bold uppercase">
      <span class="text-gray-400">Hi, I'm a...</span>
      <iconsRefresh @click="randomize" />
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__bounceOut"
        mode="out-in"
      >
        <div
          class="block max-w-xs mt-4 text-4xl normal-case lg:text-6xl xl:text-7xl"
          :key="heading"
        >{{ heading }}</div>
      </transition>
    </h2>
  </div>
</template>
<script>
export default {
  methods: {
    randomize() {
      this.heading =
        this.phrases[Math.floor(Math.random() * this.phrases.length)];
    },
  },
  data() {
    return {
      phrases: [
        'OSS Translator',
        'UI designer',
        'Wiki wizard',
        'Blog writer',
        'Software Engineer',
      ],
      heading: 'Software Engineer'
    };
  }
};
</script>