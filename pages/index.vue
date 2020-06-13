<template>
  <div>
    <carousel-slider />
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
