<template>
  <footer
    class="flex flex-col items-center justify-center gap-4 pt-6 mt-16 text-gray-600 border-t border-gray-300 dark:text-gray-200 dark:border-gray-600 lg:justify-between lg:flex-row"
  >
    <div>CC-BY-SA © 2021 Unai Mengual</div>
    <div>
      <ul class="flex flex-col items-center gap-3 sm:flex-row lg:justify-around">
        <li>
          <a
            href="https://figma.com"
            rel="noopener"
            class="inline-block px-4 py-2 font-semibold bg-white  dark:bg-[#0e0d0d] dark:border-0 border border-gray-200 rounded-md shadow-sm"
          >
            <iconsFigma class="w-6 h-6 inline-block mr-3 fill-[#F24E1E]" />Prototyped on Figma
          </a>
        </li>
        <li>
          <a
            href="https://nuxtjs.org"
            rel="noopener"
            class="inline-block px-4 py-2 font-semibold bg-white dark:bg-[#0e0d0d] dark:border-0 border border-gray-200 rounded-md shadow-sm"
          >
            <iconsNuxt class="w-6 h-6 inline-block mr-3 fill-[#00DC82]" />Built
            with Nuxt.js
          </a>
        </li>
        <li>
          <a
            href="https://netlify.com"
            rel="noopener"
            class="inline-block px-4 py-2 font-semibold bg-white dark:bg-[#0e0d0d] dark:border-0 border border-gray-200 rounded-md shadow-sm"
          >
            <iconsNetlify class="w-6 h-6 inline-block mr-3 fill-[#00C7B7]" />Hosted on Netlify
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>