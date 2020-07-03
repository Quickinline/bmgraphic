/* eslint-disable vue/no-v-html */
/* eslint-disable vue/no-v-html */
<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/3 pb-4 md:pb-0 md:w-1/5">
      <img class="fill-current w-24 mx-auto" :src="svg" alt="" srcset="">
    </div>
    <div class="w-full md:w-4/5 px-4 text-gray-base">
      <h4 class="feature-heading" v-text="heading" />
      <p class="feature-description" v-html="treatedDescription" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Développement Web'
    },
    description: {
      type: String,
      default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iure, nulla beatae molestias aliquam saepe. Sed iste voluptates optio inventore ducimus, voluptatibus ipsum amet labore corrupti totam temporibus, est porro!'
    },
    svg: {
      type: String,
      default: '/svg/tab.svg'
    }
  },
  computed: {
    treatedDescription () {
      const string = this.replaceDelimitedText('{#}', this.description)
      return string
    }
  },
  methods: {
    replaceDelimitedText (delimiter, string) {
      const mainArray = string.split(delimiter)
      for (let i = 0; i < mainArray.length; i++) {
        if ((i + 1) % 2 === 0) {
          mainArray[i] = '<span class="inline text-bmg-green-darken-10">' + mainArray[i] + '</span>'
        }
      }
      return mainArray.join('')
    }
  }
}
</script>

<style scoped>
.feature-heading{
  @apply font-baumans font-bold tracking-wider
}
.feature-description{
  @apply text-gray-600 font-semibold whitespace-pre-line
}

</style>
