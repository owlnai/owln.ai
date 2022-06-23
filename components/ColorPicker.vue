<template>
  <ColorScheme placeholder="..." tag="div">
    <div @click="darktoggle" :title="$colorMode.preference + ' mode'">
      <UnoIcon class="w-8 h-8 cursor-pointer" :class="colorIcon" />
    </div>
  </ColorScheme>
</template>
<script setup>
import { computed } from "@vue/reactivity"

const colorMode = useColorMode()
const colorIcon = computed(() => {
  if (colorMode.preference == "system") {
    return "i-carbon-screen"
  } else if (colorMode.preference == "light") {
    return "i-carbon-sun"
  } else {
    return "i-carbon-moon"
  }
})
function darktoggle() {
  if (colorMode.preference == "system") {
    colorMode.preference = "light"
  } else if (colorMode.preference == "light") {
    colorMode.preference = "dark"
  } else {
    colorMode.preference = "system"
  }
}
</script>
