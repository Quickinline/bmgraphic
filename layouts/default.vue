<template>
  <div>
    <navbar />
    <transition>
      <nuxt />
    </transition>
  </div>
</template>

<script>
import navbar from '../components/global/navbar'
export default {
  components: {
    navbar
  }
}
</script>

<style>

</style>
