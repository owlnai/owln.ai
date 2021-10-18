<template>
  <div class="bg-[#F1F1F5] dark:bg-[#161616] dark:text-[#E5E5E5] min-h-screen font-sans p-4 sm:p-8 transition-colors duration-300">
    <div class="mx-auto max-w-7xl">
      <Header />
      <Nuxt class="m-4" />
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
.nuxt-content span.icon.icon-link::before {
  position: absolute;
  left: -2.5rem;
  content: "#";
  color:rgb(114, 114, 114);
}
.dark .nuxt-content h2, .dark .nuxt-content h1, .dark .nuxt-content h3, .dark .nuxt-content h4, .dark .nuxt-content code {
  @apply !text-white;
}
.dark .nuxt-content strong {
  @apply font-bold text-white;
}
.dark .nuxt-content a {
  color: rgb(82, 152, 243);
}
</style>