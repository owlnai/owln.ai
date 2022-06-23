<template>
  <div
    class="flex flex-col-reverse max-w-4xl gap-12 md:grid md:grid-cols-3 mx-auto">
    <form
      name="contact"
      method="post"
      class="w-full md:col-span-2"
      netlify
      action="/success/"
      data-netlify="true"
      netlify-honeypot="bot-field">
      <p hidden>
        <label>Don't fill this out:</label>
        <input name="bot-field" />
      </p>
      <div class="space-y-6">
        <h1 class="text-4xl leading-6 font-bold dark:text-zinc-200">
          Contact me
        </h1>
        <p>
          You can contact me using this form. Spam submissions are filtered
          using Akismet. And don't worry, I check all emails!
        </p>
        <div class="space-y-2">
          <label
            for="name"
            class="block font-medium flex justify-between items-center">
            <span>Name</span>
            <span class="text-sm">Your full name, or username</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            maxlength="64"
            class="dark:bg-zinc-900 rounded-md dark:border-teal-800 border-2 p-4 w-full" />
        </div>

        <div class="space-y-2">
          <label
            for="email"
            class="block font-medium flex justify-between items-center">
            <span>E-mail</span>
            <span class="text-sm">An email address I can reply to</span>
          </label>
          <input
            name="email"
            type="email"
            id="email"
            maxlength="64"
            class="dark:bg-zinc-900 rounded-md dark:border-teal-800 border-2 p-4 w-full" />
        </div>
        <div class="space-y-2">
          <label
            for="message"
            class="block font-medium flex justify-between items-center">
            <span>Message</span>
            <span class="text-sm">Don't forget to say hello!</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            class="dark:bg-zinc-900 rounded-md dark:border-teal-800 border-2 p-4 w-full" />
        </div>
      </div>
      <div class="mt-6">
        <div class="flex justify-end gap-2">
          <CustomButton
            type="button"
            @click="back"
            class="inline-flex items-center gap-3">
            <UnoIcon class="i-carbon-arrow-left w-6 h-6" />
            Go back
          </CustomButton>
          <CustomButton
            type="submit"
            @click="back"
            class="inline-flex items-center gap-3 !dark:bg-teal-900 dark:text-white/87">
            <UnoIcon class="i-carbon-send w-6 h-6" />
            Submit
          </CustomButton>
        </div>
      </div>
    </form>
    <div>
      <span class="sm:text-xl">You can contact me via...</span>
      <ul
        class="flex flex-col gap-3 mt-4 lg:justify-around divide-y dark:divide-cyan-700">
        <li v-for="link in socialLinks" class="pt-3">
          <NuxtLink :to="link.href" class="inline-flex gap-3 font-medium">
            <UnoIcon class="w-6 h-6" :class="link.icon" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const { back } = useRouter()
interface socialLink {
  label: string
  href: string
  icon: string
}
const socialLinks: socialLink[] = [
  {
    label: "@owln_ai on Twitter",
    href: "https://twitter.com/owln_ai",
    icon: "i-logos-twitter",
  },
  {
    label: "@unai on Polywork",
    href: "https://polywork.com/unai",
    icon: "i-simple-icons-polywork",
  },
  {
    label: "unai#0001 on Discord",
    href: "https://discord.com",
    icon: "i-logos-discord-icon",
  },
  {
    label: "hello@owln.ai",
    href: "mailto:hello@owln.ai",
    icon: "i-carbon-email",
  },
]
</script>
