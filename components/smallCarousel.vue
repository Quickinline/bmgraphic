<template>
  <div class="mx-4">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="item in list" :key="item" class="glide__slide">
            <image-overlay />
          </li>
        </ul>
        <div data-glide-el="controls">
          <button data-glide-dir="<" class="absolute top-0 bottom-0 focus:border-0">
            <span class="bg-bmg-green flex py-2">
              <svg
                class="w-6 text-white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path d="M15 19l-7-7 7-7" /></svg>
            </span>
          </button>
          <button data-glide-dir=">" class="absolute text-5xl top-0 right-0 bottom-0 focus:border-0">
            <span class="bg-bmg-green flex py-2">
              <svg
                class="w-6 text-white"

                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path d="M9 5l7 7-7 7" /></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
// import Glide from '@glidejs/glide'
import imageOverlay from './sub/image-overlay'
export default {
  components: {
    'image-overlay': imageOverlay
  },
  data () {
    return {
      list: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ]
    }
  },
  mounted () {
    new Glide('.glide', {
      type: 'carousel',
      gap: 5,
      perView: 5,
      animationDuration: 400,
      hoverpause: false,
      autoplay: 3000,
      peek: 0,
      breakpoints: {
        1280: {
          perView: 4
        },
        768: {
          perView: 3
        },
        640: {
          perView: 2
        }
      }
    }).mount({ Controls, Breakpoints })
  }
}

</script>

<style scoped>
button:focus{
  outline: none;
}
</style>
