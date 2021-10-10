<template>
  <div class="flex md:flex-row flex-col-reverse gap-12">
    <form
      name="contacto"
      method="post"
      class="w-full"
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
            <h3 class="text-4xl leading-6 text-gold-400 font-titled">
              Contact me
            </h3>
          </div>
        </div>
        <div class="flex flex-col gap-8 mt-12">
          <div class="space-y-2">
            <label
              for="first_name"
              class="block text-base font-medium leading-5 text-gray-800"
            >
              Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="first_name"
                v-model="formData.first_name"
                id="first_name"
                maxlength="64"
                class="
                  block
                  w-full
                  transition
                  duration-150
                  ease-in-out
                  rounded-md
                  form-input
                  border-gray-200
                  shadow-sm
                  sm:text-base
                  sm:leading-5
                "
              />
            </div>
          </div>

          <div class="space-y-2">
            <label
              for="email"
              class="block text-base font-medium leading-5 text-gray-800"
            >
              Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                name="email"
                v-model="formData.email"
                type="email"
                id="email"
                maxlength="64"
                class="
                  block
                  w-full
                  transition
                  duration-150
                  ease-in-out
                  border-gray-200
                  shadow-sm
                  rounded-md
                  form-input
                  sm:text-base
                  sm:leading-5
                "
              />
            </div>
          </div>
          <div class="space-y-2">
            <label
              for="consulta"
              class="block text-base font-medium leading-5 text-gray-800"
            >
              Subject
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                name="consulta"
                v-model="formData.consulta"
                id="consulta"
                class="
                  block
                  w-full
                  transition
                  min-h-[140px]
                  duration-150
                  ease-in-out
                  rounded-md
                  border-gray-200
                  shadow-sm
                  form-input
                  sm:text-base
                  sm:leading-5
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 mt-8 border-t border-gray-300">
        <div class="flex justify-end">
          <span @click="goBack" class="inline-flex rounded-md shadow-sm">
            <button type="button" variant="secondary">Go Back</button>
          </span>
          <span class="inline-flex ml-3 rounded-md shadow-sm">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                px-4
                rounded-md
                py-2
                text-base
                font-medium
                leading-5
                text-white
                transition
                duration-150
                ease-in-out
                bg-black
                border border-transparent
                hover:bg-gray-900
                focus:outline-none
                focus:border-gray-900
                focus:shadow-outline-indigo
                active:bg-gray-900
              "
            >
              Send
            </button>
          </span>
        </div>
      </div>
    </form>
    <div class="w-full pt-16">
    <span class="text-xl">
      You can also contact me via...
      </span>
      <ul
        class="flex-col flex lg:justify-around gap-3 mt-4"
      >
        <li>
          <a
            href="https://figma.com"
            class="
              font-semibold
              py-2
              px-4
              rounded-md
              border border-gray-200
              bg-white
              shadow-sm
              inline-block
            "
            ><iconsTwitter
              class="w-6 h-6 inline-block mr-3 fill-[#1DA1F2]"
            />@owln_ai on Twitter</a
          >
        </li>
                <li>
          <a
            href="https://polywork.com/unai"
            class="
              font-semibold
              py-2
              px-4
              rounded-md
              bg-white
              border border-gray-200
              shadow-sm
              inline-block
            "
            ><iconsPolywork
              class="w-6 h-6 inline-block mr-3 fill-[#543DE0]"
            />@unai on Polywork</a
          >
        </li>
                <li>
          <a
            href="https://discord.com"
            class="
              font-semibold
              py-2
              px-4
              rounded-md
              bg-white
              border border-gray-200
              shadow-sm
              inline-block
            "
            ><iconsDiscord
              class="w-6 h-6 inline-block mr-3 fill-[#5865F2]"
            />unai#0001 on Discord</a
          >
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