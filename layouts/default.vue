<template>
  <div class="bg-[#F1F1F5] min-h-screen font-sans p-8">
    <div class="max-w-7xl mx-auto">
    <Header />
    <Nuxt class="m-4" />
    <Footer />
    </div>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>