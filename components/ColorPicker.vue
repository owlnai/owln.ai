<template>
  <div @click="darktoggle()" :title="$colorMode.preference + ' mode'">
    <keep-alive>
      <component :is="`icons-${$colorMode.preference}`" class="w-8 h-8 cursor-pointer" />
    </keep-alive>
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