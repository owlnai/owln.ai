<template>
  <header
    class="flex flex-col justify-between pt-2 pb-4 mb-12 border-b border-gray-300 sm:items-center sm:gap-12 sm:px-8 dark:border-gray-600 lg:flex-row"
  >
    <div class="flex items-center justify-center gap-8">
      <n-link
        class="flex items-center gap-4 text-3xl group lg:gap-12 xl:gap-8 xl:text-5xl font-titled"
        to="/"
      >
        <nuxt-img
          src="/avatar.svg"
          width="70px"
          height="77px"
          alt="Face drawing of Unai"
          class="w-8 transition transform scale-50 transition-300 group-hover:rotate-12 sm:w-auto"
        />Unai Mengual
      </n-link>
      <svg
        class="w-6 h-6 cursor-pointer sm:hidden"
        fill="currentColor"
        viewBox="0 0 20 20"
        @click="showMenu()"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="hidden sm:flex sm:gap-24 sm:items-center" :class="menu && '!block'">
      <nav>
        <ul
          class="grid flex-row items-baseline grid-cols-3 gap-4 py-2 pr-6 my-4 font-medium text-gray-600 sm:my-0 sm:mt-0 justify-items-center sm:gap-8 sm:flex sm:flex-row dark:text-gray-400 text-md xl:text-lg"
        >
          <li>
            <n-link to="/blog" class="hover:text-gray-800 dark:hover:text-gray-200">Blog</n-link>
          </li>
          <li>
            <a
              href="https://timeline.owln.ai"
              rel="noopener"
              class="hover:text-gray-800 dark:hover:text-gray-200"
            >Timeline</a>
          </li>
          <li>
            <n-link to="/bookmarks" class="hover:text-gray-800 dark:hover:text-gray-200">Bookmarks</n-link>
          </li>
          <li>
            <n-link to="/uses" class="hover:text-gray-800 dark:hover:text-gray-200">Uses</n-link>
          </li>
          <li>
            <n-link to="/contact" class="hover:text-gray-800 dark:hover:text-gray-200">Contact</n-link>
          </li>
        </ul>
      </nav>
      <ul class="flex items-center justify-center w-full gap-5 py-2">
        <li>
          <a href="https://github.com/owln_ai" rel="noopener" title="owlnai at GitHub">
            <iconsGithub class="w-8 h-8" />
          </a>
        </li>
        <li>
          <colorPicker />
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {
    showMenu() {
      this.menu = !this.menu;
    }
  }
}
</script>