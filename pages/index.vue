<template>
  <div>
    <carousel-slider :slider-images="carouselImages" />
    <product-content />
    <two-products />
    <promotions />
  </div>
</template>

<script>
import carousel from '~/components/carousel.vue'
import productContent from '~/components/productContent.vue'
import twoProducts from '~/components/twoProducts.vue'
import promotions from '~/components/promotions.vue'
export default {
  layout: 'default',
  components: {
    'carousel-slider': carousel,
    'product-content': productContent,
    'two-products': twoProducts,
    promotions
  },
  data () {
    return {
      carouselImages: [
        '/images/slider/sliderimage.png',
        '/images/slider/sliderimage1.png',
        '/images/slider/sliderimage2.png',
        '/images/slider/sliderimage3.png',
        '/images/slider/sliderimage4.png',
        '/images/slider/sliderimage5.png',
        '/images/slider/sliderimage6.png',
        '/images/slider/sliderimage7.png',
        '/images/slider/sliderimage8.png',
        '/images/slider/sliderimage9.png',
        '/images/slider/sliderimage10.png'
      ]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
