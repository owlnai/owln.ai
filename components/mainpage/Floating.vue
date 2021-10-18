<template>
  <div class="relative flex items-center justify-center w-full icons-floating">
    <div class="hidden sm:flex">
      <iconsCode
        class="absolute top-0 w-16 p-3 text-indigo-400 transition duration-200 dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm left-20 hover:bg-indigo-50"
      />
      <iconsWrite
        class="absolute w-16 p-3 text-green-400 transition duration-200 dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm bottom-20 left-5 hover:bg-green-50"
      />
      <iconsDesign
        class="absolute w-16 p-3 text-pink-400 transition duration-200 dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm bottom-10 right-10 hover:bg-pink-50"
      />
      <iconsTranslate
        class="absolute w-16 p-3 text-yellow-400 transition duration-200 dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm top-20 right-40 hover:bg-yellow-50"
      />
    </div>
    <nuxt-img src="/person.svg" width="404" height="379" alt="Full body drawing of Unai" />
  </div>
</template>
<style>
.animate__animated {
  --animate-duration: 0.6s;
}
.icons-floating svg {
  animation: floating 2s infinite;
  animation-direction: alternate;
}
.icons-floating svg::after {
  content: "CSS";
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes floating {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>