<template>
  <div class="h-full w-full not-prose space-y-2 border dark:border-zinc-700 p-3 rounded-lg bg-white dark:bg-black/30 hover:[box-shadow:0px_4px_0px_currentColor] hover:bg-gradient-to-b hover:from-transparent hover:to-cinder-100 dark:hover:to-cinder-900 hover:-translate-y-2 transition duration-300 ease-out">
    <span class="font-medium uppercase text-sm dark:text-gray-300">
      <slot name="type" />
    </span>
    <dl class="space-y-1">
      <dt class="text-lg font-bold leading-6 text-black dark:text-white">
        <slot />
      </dt>
      <dd class="text-base">
        <slot name="description" />
      </dd>
    </dl>
  </div>
</template>
