<template>
  <NuxtLayout name="default">
    <div class="text-center">
      <span class="text-9xl">{{ error.statusCode }}</span>
      <h1 v-if="error.statusCode === 404" class="tracking-wider uppercase">
        Page not found
      </h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink
        to="/"
        class="dark:text-black inline-block px-6 py-2 mt-4 text-xs font-semibold tracking-wider uppercase bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 sm:px-8 sm:text-base"
        >Return to Homepage</NuxtLink
      >
    </div></NuxtLayout
  >
</template>

<script>
export default {
  props: ["error"],
}
</script>
