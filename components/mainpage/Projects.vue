<template>
  <section
    class="border-t border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-950/40  dark:[background-image:radial-gradient(54.75%_54.75%_at_52.02%_-13.74%,_#151515_0%,_rgba(36,_30,_48,_0)_100%)]"
  >
    <div
      class="relative container mx-auto flex flex-col items-center justify-center w-full gap-10 py-16 font-sans md:py-24 lg:py-32 isolate px-6 2xl:px-0"
    >
      <div
        class="flex flex-col w-full max-w-6xl sm:items-center gap-y-6 sm:justify-center"
      >
        <UnoIcon
          class="-z-1 i-ph-hammer-duotone?mask text-6xl bg-gradient-to-br from-zinc-500 via-zinc-800 w-32 h-32 absolute top-30 left-30 -rotate-20 hidden sm:block"
        />
        <UnoIcon
          class="-z-1 i-ph-palette-duotone?mask text-6xl bg-gradient-to-br from-zinc-500 via-zinc-800 w-32 h-32 absolute top-30 right-30 rotate-20 transform-scale-x-[-1] hidden sm:block"
        />
        <h2 class="text-3xl font-semibold font-headings 2xl:text-5xl steel" style="--stagger:4" data-animate>
          Contact
        </h2>
        <p
          class="prose sm:text-center text-lg sm:text-xl leading-8 dark:text-gray-300 max-w-43ch" style="--stagger:5" data-animate
        >
          I'm available for freelance work, collaborations, and open-source projects. Feel free to reach out to me!
        </p>
        <NuxtLink to="/projects">
          <uiNotReallyAButton class="inline-block mt-4" style="--stagger:6" data-animate>
            View all projects
          </uiNotReallyAButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
