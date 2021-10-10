<template>
  <div class="text-center">
      <span class="text-9xl font-titled">{{error.statusCode }}</span>
    <h1 v-if="error.statusCode === 404" class="uppercase tracking-wider">Page not found</h1>
    <h1 v-else>An error occurred</h1>
              <n-link
            to="/"
            class="
              font-semibold
              tracking-wider
              uppercase
              bg-white
              hover:bg-gray-50
              px-6
              py-2
              sm:px-8
              rounded-md
              border border-gray-200
              shadow-sm
              text-xs
              inline-block
                            mt-4
              sm:text-base
            "
            >Return to Homepage</n-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>