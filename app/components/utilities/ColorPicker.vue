<script setup>
import { Switch } from '@headlessui/vue'

const enabled = ref(false)

const colorMode = useColorMode()
const colorIcon = computed(() => {
  const preference = colorMode.value
  if (preference === 'light')
    return 'i-ph-sun-bold'
  else
    return 'i-ph-moon-bold'
})
function darktoggle() {
  const preference = colorMode.value
  if (preference === 'dark')
    colorMode.preference = 'light'
  else if (preference === 'light')
    colorMode.preference = 'dark'
}
</script>

<template>
  <ColorScheme
    class="w-74px h-32px"
    placeholder="..."
    tag="div"
  >
    <Switch
      v-model="enabled"
      class="!bg-zinc-200 dark:!bg-zinc-800 relative inline-flex h-8 w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-zinc-300 dark:border-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      @click="darktoggle"
    >
      <span class="sr-only">Change theme</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-7 w-[34px] transform rounded-full bg-white dark:bg-zinc-900 shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <UnoIcon
          class="w-5 h-7 text-current cursor-pointer"
          :class="colorIcon"
        />
      </span>
    </Switch>
  </ColorScheme>
</template>
