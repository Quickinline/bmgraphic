<template>
  <div class="p-8">
    <img class="w-full" :src="cardData.image" alt="">
    <h2 class="font-baumans capitalize text-2xl text-gray-base" v-text="cardData.title" />
    <p class="text-left font-light" v-text="cardData.description" />
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default () {
        return {
          title: 'Flyers',
          description: 'Hello print imprime vos flyers à bas prix et dans des délais de choc',
          image: 'https://picsum.photos/400/400/?image=20'
        }
      }
    }
  }
}
</script>

<style>

</style>
