<script setup lang="ts">
function doPrint() {
  print()
}
</script>

<template>
  <button
    type="button"
    class="font-bold tracking-tight text-sm hover:text-white"
    @click="doPrint"
  >
    <UnoIcon class="i-ph-printer w-5 h-5 mr-2" />Print this page
  </button>
</template>
