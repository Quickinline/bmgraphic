<template>
  <div>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="image in images" :key="image.path" class="glide__slide">
            <img class="mx-auto h-full w-full" :src="image.show ? image.path : ''" alt srcset>
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
  </div>
</template>

<script>
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide, { Controls, Breakpoints, Swipe } from '@glidejs/glide/dist/glide.modular.esm'
export default {
  data () {
    const initialization = [
      { path: '/images/slider/sliderimage.png' },
      { path: '/images/slider/sliderimage1.png' },
      { path: '/images/slider/sliderimage2.png' },
      { path: '/images/slider/sliderimage3.png' },
      { path: '/images/slider/sliderimage4.png' },
      { path: '/images/slider/sliderimage5.png' },
      { path: '/images/slider/sliderimage6.png' },
      { path: '/images/slider/sliderimage7.png' },
      { path: '/images/slider/sliderimage8.png' },
      { path: '/images/slider/sliderimage9.png' },
      { path: '/images/slider/sliderimage10.png' }
    ]
    const threshold = initialization.length > 2 ? 2 : 1
    for (let index = 0; index < threshold; index++) {
      initialization[index].show = true
    }
    for (let index = threshold; index < initialization.length; index++) {
      initialization[index].show = false
    }
    return {
      images: initialization,
      threshold
    }
  },
  mounted () {
    const vm = this
    window.glide = new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      gap: 0,
      animationDuration: 400,
      hoverpause: false,
      autoplay: 3000,
      peek: 0
    })
    window.glide.on('move', function () {
      vm.images[window.glide.index + vm.threshold].show = true
      // eslint-disable-next-line no-console
      console.log('downloaded the slide n°' + (window.glide.index + vm.threshold))
    })
    window.glide.mount({ Controls, Breakpoints, Swipe })
  }
}
</script>

<style>
</style>
