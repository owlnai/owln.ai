<template>
  <div
    class="bg-[#F1F1F5] dark:bg-black dark:text-zinc-400 min-h-screen font-sans p-4 sm:p-8 transition-colors duration-300 blurry-gradient"
  >
    <div class="mx-auto max-w-7xl">
      <Header />
      <slot class="m-4" />
      <Footer />
    </div>
  </div>
</template>
<style>
body {
  transition: background-color 0.3s;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.nuxt-content span.icon.icoNuxtLink::before {
  position: absolute;
  left: -2.5rem;
  content: '#';
  color: rgb(114, 114, 114);
}
.blurry-gradient {
  background: radial-gradient(
      circle at 15% 50%,
      #2bf3c13a,
      rgba(255, 255, 255, 0) 25%
    ) fixed,
    radial-gradient(circle at 85% 30%, #1691a146, rgba(255, 255, 255, 0) 25%) fixed;
}
</style>
