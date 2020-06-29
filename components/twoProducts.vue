<template>
  <div class="bg-bmg-light-gray pb-10">
    <div class="container pt-10 pb-4">
      <h2 class="mx-12 text-4xl font-baumans text-white text-center">
        Nous assurons la conception la fabrication et la pose de vos
        <span class="text-bmg-green">supports publicitaires</span>
      </h2>
    </div>
    <div class="container justify-center flex flex-wrap">
      <div v-for="(product,index) in products" :key="product.name" class="w-full lg:w-1/2 p-4 sm:flex" :data-aos="index%2==0 ? 'fade-right' : 'fade-left'">
        <div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center text-center" :style="{'background-image': 'url(' + product.image+')'}" />

        <!-- card-content -->
        <div class="flex flex-col justify-between px-4 py-4">
          <h3 class="product-title" v-text="product.name" />
          <h4 class="product-small-description" v-text="product.smallDescription" />
          <p class="product-description" v-text="product.description" />
          <button class="bg-bmg-green hover:bg-bmg-green-light mr-auto text-white font-normal py-1 px-2 rounded">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css'
export default {
  data () {
    return {
      products: [
        {
          name: 'Objets publicitaires',
          smallDescription: 'Flocage tee shirt et Casquettes',
          description: "Créer un tee shirt Casquette ou d'autres objets personnalisé de votre texte, motif ou photos selon votre choix",
          image: '/images/index/two-products/mugs.jpg'
        },
        {
          name: 'Stickers',
          smallDescription: 'Packaging Produits',
          description: 'Vous avez une marque ?\nvous avez besoin de packagin et des stickers pour vos produits ?',
          image: '/images/index/two-products/stikers.jpg'
        }
      ]
    }
  },
  created () {
    import('aos').then(AOS => AOS.init())
  }
}
</script>

<style scoped>
.product-title{
  @apply mb-2 font-medium font-baumans text-2xl text-white
}
.product-small-description{
  @apply font-roboto text-base font-normal text-bmg-green
}
.product-description{
  @apply mb-4 pt-4 font-roboto font-medium whitespace-pre-line text-white text-base
}
</style>
