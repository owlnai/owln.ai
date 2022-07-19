<template>
  <div class="relative flex items-center justify-center w-full icons-floating">
    <div class="hidden sm:flex">
      <iconsCode
        class="iconBg top-0 left-20 text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/70" />
      <iconsWrite
        class="iconBg bottom-20 left-5 text-green-400 hover:bg-green-50 dark:hover:bg-green-900/70" />
      <iconsDesign
        class="iconBg bottom-10 right-10 text-pink-400 hover:bg-pink-50  dark:hover:bg-pink-900/70" />
      <iconsTranslate
        class="iconBg top-20 right-40 text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/70" />
    </div>
    <img
      src="/person.svg"
      width="404"
      height="379"
      alt="Full body drawing of Unai"
      class="dark:brightness-90 dark:drop-shadow-[0_0_2px_rgba(255,255,255,1)]" />
  </div>
</template>
<style>
.iconBg {
  --at-apply: absolute dark:border-zinc-800 bg-white border border-gray-200 rounded-md shadow-sm p-3 w-16 transition duration-200 dark:bg-[#0e0d0d]
}
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
