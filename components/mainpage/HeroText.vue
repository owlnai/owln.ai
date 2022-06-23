<template>
  <div class="w-full space-y-8">
    <span class="dark:text-gray-400 text-5xl font-bold dark:text-white/87"
      >Welcome to my site</span
    >
    <p class="text-lg">
      Hey there! My name is Unai, known on the Internet as owlnai. I'm a web
      developer based in Spain who always has a project in the works, with a
      passion for products that are beautiful and easy to use.
    </p>
    <div class="flex gap-4">
      <NuxtLink to="/about"
        ><CustomButton class="flex gap-2 items-center"
          ><UnoIcon class="i-carbon-user" />About me</CustomButton
        ></NuxtLink
      >
      <NuxtLink to="/contact"
        ><CustomButton class="flex gap-2 items-center"
          ><UnoIcon class="i-carbon-email" />Get in touch</CustomButton
        ></NuxtLink
      >
    </div>
  </div>
</template>
