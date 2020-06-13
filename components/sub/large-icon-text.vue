<template>
  <div class="pt-8 transition-transform duration-200" :class="{'transform -translate-y-4':hover}">
    <div class="svg-container hover:bg-gray-base hover:text-bmg-green" @mouseover="hover = true" @mouseleave="hover = false">
      <slot name="svg" />
    </div>
    <h2 class="text-2xl text-gray-base text-center mt-2 font-baumans" v-text="titleText" />
    <p class="text-gray-base text-center text-sm" v-text="descriptionText" />
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      default: 'Moindre coût'
    },
    descriptionText: {
      type: String,
      default: 'Avec BM Graphic nous vous garantirons des résultats de qualité à des prix raisonables'
    }
  },
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.svg-container{
  @apply w-32 p-6 transition-colors duration-200 mx-auto border-4 rounded-full
}
</style>
