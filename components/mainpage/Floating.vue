<template>
  <div class="w-full justify-center items-center flex relative icons-floating">
    <div class="hidden sm:flex">
      <iconsCode
        class="
          absolute
          rounded-md
          border border-gray-200
          shadow-sm
          text-indigo-400
          w-16
          left-20
          top-0
          p-3
          bg-white
          hover:bg-indigo-50
          transition
          duration-200
        "
      />
      <iconsWrite
        class="
          absolute
          rounded-md
          border border-gray-200
          shadow-sm
          text-green-400
          w-16
          bottom-20
          left-5
          p-3
          bg-white
          hover:bg-green-50
          transition
          duration-200
        "
      />
      <iconsDesign
        class="
          absolute
          rounded-md
          border border-gray-200
          shadow-sm
          text-pink-400
          w-16
          bottom-10
          right-10
          p-3
          bg-white
          hover:bg-pink-50
          transition
          duration-200
        "
      />
      <iconsTranslate
        class="
          absolute
          rounded-md
          border border-gray-200
          shadow-sm
          text-yellow-400
          w-16
          top-20
          right-40
          p-3
          bg-white
          hover:bg-yellow-50
          transition
          duration-200
        "
      />
    </div>
    <nuxt-img
      src="/person.svg"
      width="404"
      height="379"
      alt="Full body drawing of Unai"
    />
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
  content: 'CSS';
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