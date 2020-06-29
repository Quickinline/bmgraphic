<template>
  <div>
    <navbar />
    <transition>
      <nuxt />
    </transition>
    <footer-element />
  </div>
</template>

<script>
import navbar from '~/components/global/navbar'
import footer from '~/components/global/footer'
export default {
  components: {
    navbar,
    'footer-element': footer
  }
}
</script>

<style>

</style>
