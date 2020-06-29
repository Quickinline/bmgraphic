<template>
  <div class="container flex flex-row justify-between flex-wrap">
    <div class="w-3/5">
      <carousel :slider-images="images" />
    </div>
    <div class="w-2/5 px-4">
      <h4 class="font-baumans text-bmg-green text-2xl" v-text="title" />
      <ul>
        <li v-for="(detail,index) in details" :key="index" class="py-2">
          <detail-item :detail="detail" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousel'
import detail from '~/components/sub/detail-item'
export default {
  components: {
    carousel,
    'detail-item': detail
  },
  props: {
    images: {
      type: Array,
      default () {
        return [
          'https://picsum.photos/id/237/1280/720/',
          'https://picsum.photos/id/238/1280/720/',
          'https://picsum.photos/id/239/1280/720/',
          'https://picsum.photos/id/240/1280/720/',
          'https://picsum.photos/id/241/1280/720/',
          'https://picsum.photos/id/242/1280/720/'
        ]
      }
    },
    title: {
      type: String,
      default: 'communication visuelle'
    },
    details: {
      type: Array,
      default () {
        return [
          {
            name: 'test Détail',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore libero ratione quae, quaerat ducimus inventore nobis perspiciatis molestias, sequi totam ea numquam omnis error mollitia adipisci, suscipit consectetur sunt fugit.'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
