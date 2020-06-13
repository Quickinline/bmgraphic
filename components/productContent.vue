<template>
  <div class="background-pattern">
    <div class="container px-12 py-10 font-baumans text-2xl">
      <!-- <h2 class="text-4xl text-gray-700 text-center">
        <span class="text-bmg-green">&#9654; </span>
        <span class="text-black"> BM Graphic </span>
        spécialisée dans l’impression publicitaire
        <span class="text-bmg-green"> &#9664;</span>
      </h2> -->
      <generic-title black-text=" BM Graphic " gray-text="spécialisée dans l’impression publicitaire" />
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
          text: 'hey',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey1',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey2',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey3',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey20',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey21',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey22',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
        },
        {
          text: 'hey23',
          link: '/about',
          image: '/images/products/carte_visite.jpg'
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
  @apply flex justify-center items-center absolute bottom-0 m-2 top-0 right-0 left-0 bg-bmg-green-light opacity-0 transition-opacity duration-100 ease-linear text-center
}
.overlay:hover{
  @apply opacity-75
}

</style>
