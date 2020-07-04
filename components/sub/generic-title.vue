<template>
  <div class="overflow-hidden">
    <h2 class="text-4xl over text-gray-700 text-center" :data-aos="animated">
      <span class="text-bmg-green">
        <svg class="w-10 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.155 96.155"><path d="M20.972 95.594l57.605-45.951c.951-.76.951-2.367 0-3.127L20.968.56c-.689-.547-1.716-.709-2.61-.414-.186.061-.33.129-.436.186-.65.35-1.056 1.025-1.056 1.764v91.967c0 .736.405 1.414 1.056 1.762.109.06.253.127.426.185.903.295 1.933.134 2.624-.416z" /></svg>
      </span>
      <span class="text-black" v-text="blackText" />
      {{ grayText }}
      <span class="text-bmg-green">
        <svg class="w-10 fill-current inline transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.155 96.155"><path d="M20.972 95.594l57.605-45.951c.951-.76.951-2.367 0-3.127L20.968.56c-.689-.547-1.716-.709-2.61-.414-.186.061-.33.129-.436.186-.65.35-1.056 1.025-1.056 1.764v91.967c0 .736.405 1.414 1.056 1.762.109.06.253.127.426.185.903.295 1.933.134 2.624-.416z" /></svg>
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    blackText: {
      type: String,
      default: ''
    },
    grayText: {
      type: String,
      default: ''
    },
    animated: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
