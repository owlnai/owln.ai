<template>
  <footer
    class="
      text-gray-600
      pt-6
      border-t border-gray-300
      flex
      justify-center
      items-center
      lg:justify-between
      flex-col
      lg:flex-row
      gap-4
    "
  >
    <div>CC-BY-SA © 2021 Unai Mengual</div>
    <div>
      <ul
        class="flex-col sm:flex-row flex items-center lg:justify-around gap-3"
      >
        <li>
          <a
            href="https://figma.com"
            rel="noopener"
            class="
              font-semibold
              bg-white
              py-2
              px-4
              rounded-md
              border border-gray-200
              shadow-sm
              inline-block
            "
            ><iconsFigma
              class="w-6 h-6 inline-block mr-3 fill-[#F24E1E]"
            />Prototyped on Figma</a
          >
        </li>
        <li>
          <a
            href="https://nuxtjs.org"
            rel="noopener"
            class="
              font-semibold
              bg-white
              py-2
              px-4
              rounded-md
              inline-block
              border border-gray-200
              shadow-sm
            "
            ><iconsNuxt class="w-6 h-6 inline-block mr-3 fill-[#00DC82]" />Built
            with Nuxt.js</a
          >
        </li>
        <li>
          <a
            href="https://netlify.com"
            rel="noopener"
            class="
              font-semibold
              bg-white
              py-2
              px-4
              rounded-md
              border border-gray-200
              shadow-sm
              inline-block
            "
            ><iconsNetlify
              class="w-6 h-6 inline-block mr-3 fill-[#00C7B7]"
            />Hosted on Netlify</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>