<template>
  <h2 class="text-4xl text-gray-700 text-center">
    <span class="text-bmg-green">&#9654; </span>
    <span class="text-black" v-text="blackText" />
    {{ grayText }}
    <span class="text-bmg-green"> &#9664;</span>
  </h2>
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
    }
  }
}
</script>

<style>

</style>
