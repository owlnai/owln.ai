<template>
  <div @click="darktoggle()">
    <component :is="`icons-${$colorMode.preference}`"  class="w-8 h-8 cursor-pointer" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ['system', 'light', 'dark']
    }
  },
  methods: {
    darktoggle() {
      const currentMode = this.$colorMode.preference;
      if (currentMode == "system") {
        this.$colorMode.preference = "light";
      }
      else if (currentMode == "light") {
        this.$colorMode.preference = "dark";
      }
      else {
        this.$colorMode.preference = "system";
      }
    }
  }
}
</script>