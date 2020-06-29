<template>
  <div class="background-pattern">
    <div class="container px-12 py-10 font-baumans text-2xl">
      <generic-title animated="fade-up" black-text=" BM Graphic " gray-text="spécialisée dans l’impression publicitaire" />
    </div>
    <div class="container pb-10 justify-center flex flex-wrap">
      <div v-for="product in products" :key="product.text" class="relative w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <img :src="product.image" class="w-full" alt="">
        <div class="overlay">
          <h2 class="text-white font-semibold font-baumans text-4xl" v-text="product.text" />
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
          text: 'Impression Grand Format',
          link: '/services/impression-grand-format',
          image: '/images/index/product-content/bache tendu.jpg'
        },
        {
          text: 'Impression Petit Format',
          link: '/service/impression-petit-format',
          image: '/images/index/product-content/brochure.jpg'
        },
        {
          text: 'Décoration',
          link: '/services/Décoration',
          image: '/images/index/product-content/habillage murale.jpg'
        },
        {
          text: 'PLV & Stands',
          link: '/services/PLV-&-stands',
          image: 'images/index/product-content/STAND 43.jpg'
        },
        {
          text: 'Enseignes & Signalétique',
          link: '/services/enseignes-&-signalétique',
          image: '/images/index/product-content/totem.jpg'
        },
        {
          text: 'Communication Visuelle',
          link: '/services/communication-visuelle',
          image: '/images/index/product-content/carte de visite.jpg'
        },
        {
          text: 'Marquage Textile',
          link: '/services/marquage-textile',
          image: '/images/index/product-content/flokage.jpg'
        },
        {
          text: 'Marquage Véhicules',
          link: '/services/Marquage-véhicules',
          image: '/images/index/product-content/couvring total.jpg'
        }
      ]

    }
  }
}
</script>

<style scoped>
.background-pattern{
  background: url('~assets/images/pattern.png') repeat;
}
.overlay{
  @apply flex justify-center items-center absolute bottom-0 m-2 top-0 right-0 left-0 bg-transparent-black opacity-0 transition-opacity duration-100 ease-linear text-center
}
.overlay:hover{
  @apply opacity-100
}

</style>
