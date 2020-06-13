<template>
  <div>
    <page-indicator page-name="À Propos" :pathway="pathway" />
    <print-text />
    <four-icons />
    <div class="bg-dark-gray py-8">
      <small-carousel />
    </div>
  </div>
</template>

<script>
import pageIndicator from '~/components/global/pageIndicator'
import printText from '~/components/printText'
import fouricons from '~/components/fourIcons'
import smallCarousel from '~/components/smallCarousel'
export default {
  layout: 'default',
  components: {
    'page-indicator': pageIndicator,
    'print-text': printText,
    'four-icons': fouricons,
    'small-carousel': smallCarousel
  },
  data () {
    return {
      pathway: [
        {
          name: 'Home',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style>

</style>
