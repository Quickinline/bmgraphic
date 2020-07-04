<template>
  <div class="background-pattern">
    <div class="container px-12 py-10 font-baumans text-2xl">
      <generic-title animated="fade" black-text=" BM Graphic " gray-text="spécialisée dans l’impression publicitaire" />
    </div>
    <div class="container pb-10 justify-center flex flex-wrap">
      <div v-for="product in products" :key="product.service" class="relative w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <img :src="product.image" class="w-full" alt="">
        <div class="overlay" @click="goto(product.service)">
          <h2 class="text-white font-semibold w-full break-words font-baumans text-4xl" v-text="$store.getters['services/formattedName'](product.service)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from './sub/generic-title.vue'
export default {
  components: {
    'generic-title': title
  },
  data () {
    return {
      products: [
        {
          service: 'impression-grand-format',
          image: '/images/index/product-content/bache tendu.jpg'
        },
        {
          service: 'impression-numérique-et-offset',
          image: '/images/index/product-content/brochure.jpg'
        },
        {
          service: 'Stickers-et-Décoration',
          image: '/images/index/product-content/habillage murale.jpg'
        },
        {
          service: 'PLV-événementiel',
          image: 'images/index/product-content/STAND 43.jpg'
        },
        {
          service: 'enseignes-&-signalétique',
          image: '/images/index/product-content/totem.jpg'
        },
        {
          service: 'communication-visuelle',
          image: '/images/index/product-content/carte de visite.jpg'
        },
        {
          service: 'marquage-textile',
          image: '/images/index/product-content/flokage.jpg'
        },
        {
          service: 'Marquage-véhicules',
          image: '/images/index/product-content/couvring total.jpg'
        }
      ]

    }
  },
  methods: {
    goto (product) {
      const link = this.$store.getters['services/link'](product)
      this.$router.push({ path: link })
    }
  }
}
</script>

<style scoped>
.background-pattern{
  background: url('~assets/images/pattern.png') repeat;
}
.overlay{
  @apply flex justify-center items-center absolute bottom-0 m-2 top-0 right-0 left-0 bg-transparent-black opacity-0 transition-opacity duration-100 ease-linear text-center cursor-pointer
}
.overlay:hover{
  @apply opacity-100
}

</style>
