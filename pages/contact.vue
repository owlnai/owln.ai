<template>
  <div class="flex flex-col-reverse w-full gap-12 md:flex-row">
    <form
      name="contacto"
      method="post"
      class="w-full max-w-[580px]"
      netlify
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <p hidden>
        <input name="bot-field" v-model="formData.botfield" />
        <label>
          Don’t fill this out:
          <input name="bot-field" v-model="formData.botfield" />
        </label>
      </p>
      <div class="text-black-primary">
        <div>
          <div>
            <h3 class="text-4xl leading-6 text-gold-400 font-titled">Contact me</h3>
          </div>
        </div>
        <div class="flex flex-col gap-8 mt-12">
          <div class="space-y-2">
            <label
              for="first_name"
              class="block text-base font-medium leading-5 text-gray-800 dark:text-gray-200"
            >Name</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="first_name"
                v-model="formData.first_name"
                id="first_name"
                maxlength="64"
                class="dark:bg-[#0e0d0d] dark:border-0 py-4 block w-full transition duration-150 ease-in-out border-gray-200 rounded-md shadow-sm form-input sm:text-base sm:leading-5"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label
              for="email"
              class="block text-base font-medium leading-5 text-gray-800 dark:text-gray-200"
            >Email address</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                name="email"
                v-model="formData.email"
                type="email"
                id="email"
                maxlength="64"
                class="dark:bg-[#0e0d0d] dark:border-0 py-4 block w-full transition duration-150 ease-in-out border-gray-200 rounded-md shadow-sm form-input sm:text-base sm:leading-5"
              />
            </div>
          </div>
          <div class="space-y-2">
            <label
              for="consulta"
              class="block text-base font-medium leading-5 text-gray-800 dark:text-gray-200"
            >Subject</label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                name="consulta"
                v-model="formData.consulta"
                id="consulta"
                class="dark:bg-[#0e0d0d] dark:border-0 block w-full py-4 transition min-h-[140px] duration-150 ease-in-out rounded-md border-gray-200 shadow-sm form-input sm:text-base sm:leading-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 mt-8">
        <div class="flex justify-end gap-2">
          <span @click="goBack" class="inline-flex items-center gap-3 px-1 pb-1 shadow-sm">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <button type="button" class>Go Back</button>
          </span>
          <span class="inline-flex ml-3 rounded-md shadow-sm">
            <button
              type="submit"
              class="inline-flex items-center gap-3 px-6 py-2 text-base font-medium leading-5 text-white transition duration-150 ease-in-out bg-black border border-transparent rounded-md dark:hover:border-white light:hover:bg-gray-900 focus:outline-none light:focus:border-gray-900 focus:shadow-outline-indigo light:active:bg-gray-900"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                />
              </svg>
              Send
            </button>
          </span>
        </div>
      </div>
    </form>
    <div class="pt-16">
      <span class="text-xl">You can also contact me via...</span>
      <ul class="flex flex-col gap-3 mt-4 lg:justify-around">
        <li>
          <a
            href="https://figma.com"
            class="inline-block px-4 py-2 font-semibold dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm"
          >
            <iconsTwitter class="w-6 h-6 inline-block mr-3 fill-[#1DA1F2]" />@owln_ai on Twitter
          </a>
        </li>
        <li>
          <a
            href="https://polywork.com/unai"
            class="inline-block px-4 py-2 font-semibold dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm"
          >
            <iconsPolywork class="w-6 h-6 inline-block mr-3 fill-[#543DE0]" />@unai on Polywork
          </a>
        </li>
        <li>
          <a
            href="https://discord.com"
            class="inline-block px-4 py-2 font-semibold dark:bg-[#0e0d0d] dark:border-0 bg-white border border-gray-200 rounded-md shadow-sm"
          >
            <iconsDiscord class="w-6 h-6 inline-block mr-3 fill-[#5865F2]" />unai#0001 on Discord
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      error: null,
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    goBack() {
      this.$router.back()
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch((error) => alert(error))
    },
  },
}
</script>