<template>
  <div class="text-center">
    <span class="text-9xl font-titled">{{ error.statusCode }}</span>
    <h1 v-if="error.statusCode === 404" class="tracking-wider uppercase">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <n-link
      to="/"
      class="inline-block px-6 py-2 mt-4 text-xs font-semibold tracking-wider uppercase bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 sm:px-8 sm:text-base"
    >Return to Homepage</n-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>