<template>
  <div class="w-full space-y-8">
    <h1 class="text-gray-800 text-4xl 2xl:text-5xl font-bold dark:text-white/87">
      Welcome to my site
    </h1>
    <p class="text-lg 2xl:text-xl">
      Hey there! My name is Unai, known on the Internet as <code>owlnai</code>.
      I'm a web developer based in Spain who always has a project in the works,
      with a passion for products that are beautiful and easy to use.
    </p>
    <div class="flex gap-4">
      <NuxtLink to="/about"
        ><CustomButton
          class="flex gap-2 items-center bg-gradient-to-b from-pink-200/40 via-transparent dark:from-pink-200/30 dark:via-black"
          ><UnoIcon class="i-carbon-user" />About me</CustomButton
        ></NuxtLink
      >
      <NuxtLink to="/contact"
        ><CustomButton
          class="flex gap-2 items-center bg-gradient-to-t from-cyan-200/40 via-transparent dark:from-cyan-200/30 dark:via-black"
          ><UnoIcon class="i-carbon-email" />Get in touch</CustomButton
        ></NuxtLink
      >
    </div>
  </div>
</template>
