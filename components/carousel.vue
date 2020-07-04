<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="image in images" :key="image.href" class="glide__slide">
          <img class="mx-auto h-full w-full" :src="image.href" alt srcset>
        </li>
      </ul>
    </div>
    <div data-glide-el="controls">
      <button data-glide-dir="<" class="absolute text-5xl mx-16 text-dark-gray hover:text-white top-0 bottom-0 focus:outline-none">
        &lt;
      </button>
      <button data-glide-dir=">" class="absolute text-5xl mx-16 text-dark-gray hover:text-white top-0 right-0 bottom-0 focus:outline-none">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide, { Controls, Breakpoints, Swipe, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
export default {
  props: {
    sliderImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    images () {
      const result = []
      this.sliderImages.forEach((element) => {
        result.push({
          href: element
          // display: false
        })
      })
      return result
    }
  },
  mounted () {
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      gap: 0,
      //   animationDuration: 400,
      hoverpause: false,
      autoplay: 5000,
      peek: 0
    })
    glide.mount({ Controls, Breakpoints, Swipe, Autoplay })
  }
}
</script>

<style>
</style>
