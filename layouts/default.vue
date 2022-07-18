<template>
  <div
    class="bg-[#F1F1F5] dark:bg-black dark:text-gray-400 text-gray-600 min-h-screen font-sans p-4 sm:p-8 transition-colors duration-300 blurry-gradient custom-inter">
    <div class="mx-auto container max-w-6xl">
      <Header />
      <slot class="m-4" />
      <Footer />
    </div>
  </div>
</template>
<style>
.custom-inter {
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}

.blurry-gradient {
  background: radial-gradient(
        circle at 15vw 50vh,
        #1d97c446,
        rgba(255, 255, 255, 0) 25%
      )
      ,
    radial-gradient(circle at 85vw 30vh, #f9aae246, rgba(255, 255, 255, 0) 25%)
     ;
}
</style>
