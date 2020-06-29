<template>
  <div class="container flex flex-row flex-wrap justify-center py-8">
    <div v-for="(card,index) in cardList" :key="index" class="w-full md:w-1/3">
      <service-card :card-data="card" />
    </div>
  </div>
</template>

<script>
import serviceCard from '~/components/sub/service-card'
export default {
  components: {
    'service-card': serviceCard
  },
  props: {
    cardList: {
      type: Array,
      default () {
        const result = []
        for (let index = 0; index < 6; index++) {
          result.push({
            title: 'Flyers',
            description: 'Hello print imprime vos flyers à bas prix et dans des délais de choc',
            image: 'https://picsum.photos/400/400/?image=20'
          })
        }
        return result
      }
    }
  }
}
</script>

<style>

</style>
