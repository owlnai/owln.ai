<template>
  <header
    class="
      flex
      items-center
      lg:flex-row
      flex-col
      justify-between
      pt-2
      pb-4
      px-8
      mb-12
      border-b border-gray-300
    "
  >
    <n-link
      class="
        group
        flex
        items-center
        gap-4
        lg:gap-12
        xl:gap-8
        text-3xl
        xl:text-5xl
        font-titled
      "
      to="/"
    >
      <nuxt-img
        src="/avatar.svg"
        width="70"
        height="77.77"
        alt="Face drawing of Unai"
        class="
          transform
          transition transition-300
          group-hover:rotate-12
          sm:w-auto
          w-8
        "
      />
      Unai Mengual
    </n-link>
    <nav>
      <ul
        class="
          flex flex-wrap
          py-2
          gap-8
          font-medium
          text-md
          xl:text-lg
          uppercase
          text-gray-600
        "
      >
        <li><n-link to="/blog" class="hover:text-gray-800">Blog</n-link></li>
        <li>
          <a
            href="https://timeline.owln.ai"
            rel="noopener"
            class="hover:text-gray-800"
            >Timeline</a
          >
        </li>
        <li>
          <n-link to="/bookmarks" class="hover:text-gray-800">Bookmarks</n-link>
        </li>
        <li><n-link to="/uses" class="hover:text-gray-800">Uses</n-link></li>
        <li>
          <n-link to="/contact" class="hover:text-gray-800">Contact</n-link>
        </li>
      </ul>
    </nav>
    <ul class="hidden py-2 gap-5 sm:flex">
      <li>
        <a
          href="https://github.com/owln_ai"
          rel="noopener"
          title="owlnai at GitHub"
          ><iconsGithub
        /></a>
      </li>
    </ul>
  </header>
</template>