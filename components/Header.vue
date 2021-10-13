<template>
  <header
    class="flex flex-col items-center justify-between px-8 pt-2 pb-4 mb-12 border-b border-gray-300 lg:flex-row"
  >
    <n-link
      class="flex items-center gap-4 text-3xl group lg:gap-12 xl:gap-8 xl:text-5xl font-titled"
      to="/"
    >
      <nuxt-img
        src="/avatar.svg"
        width="70"
        height="77.77"
        alt="Face drawing of Unai"
        class="w-8 transition transform transition-300 group-hover:rotate-12 sm:w-auto"
      />Unai Mengual
    </n-link>
    <nav>
      <ul class="flex flex-wrap gap-8 py-2 font-medium text-gray-600 uppercase text-md xl:text-lg">
        <li>
          <n-link to="/blog" class="hover:text-gray-800">Blog</n-link>
        </li>
        <li>
          <a href="https://timeline.owln.ai" rel="noopener" class="hover:text-gray-800">Timeline</a>
        </li>
        <li>
          <n-link to="/bookmarks" class="hover:text-gray-800">Bookmarks</n-link>
        </li>
        <li>
          <n-link to="/uses" class="hover:text-gray-800">Uses</n-link>
        </li>
        <li>
          <n-link to="/contact" class="hover:text-gray-800">Contact</n-link>
        </li>
      </ul>
    </nav>
    <ul class="hidden gap-5 py-2 sm:flex">
      <li>
        <a href="https://github.com/owln_ai" rel="noopener" title="owlnai at GitHub">
          <iconsGithub />
        </a>
      </li>
    </ul>
  </header>
</template>