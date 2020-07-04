<template>
  <div class="background-pattern pb-10 pt-5">
    <div class="container px-12 py-10 font-baumans text-2xl">
      <generic-title black-text="Promotions" gray-text="à ne pas manquer !" />
    </div>
    <div class="container justify-center overflow-hidden flex flex-wrap">
      <div v-for="image in images" :key="image" class="w-full p-3 md:w-1/2 lg:w-1/3">
        <img class="w-full" :src="image" alt="">
      </div>
    </div>
    <div class="container py-20 justify-center flex flex-wrap">
      <div class="w-full py-4 px-2 md:w-1/3">
        <h4 class="text-2xl font-baumans text-bmg-light-gray">
          Bienvenu chez
          <span class="text-bmg-green-light">BM Graphic</span>
        </h4>
        <p class="text-bmg-light-gray mt-2">
          <span class="p-1 rounded mr-1 bg-bmg-green-light font-baumans">BM</span>
          spécialisée dans l'impression publicitaire sur tout supports souples ou rigides, dans l'habillage de véhicules décoration de vitrines, PLV, l'événementielle.
        </p>
        <div class="flex flex-wrap mt-8">
          <div class="w-1/2 py-4">
            <svg
              fill="none"
              :class="[svgClass]"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>            <h4 class="text-xl text-center font-baumans">
              Proximité
            </h4>
          </div>
          <div class="w-1/2 py-4">
            <svg :class="[svgClass]" viewBox="0 0 512 512"><path d="M435.143 129.356c-6.796-6.795-17.463-7.797-25.407-2.384-29.926 20.398-180.03 122.969-196.162 139.1-23.394 23.395-23.394 61.459 0 84.854 11.697 11.696 27.063 17.545 42.427 17.545s30.729-5.849 42.427-17.545c16.131-16.132 118.701-166.236 139.1-196.162 5.411-7.943 4.41-18.611-2.385-25.408zM270.142 322.641c-7.797 7.799-20.486 7.799-28.283 0-7.798-7.797-7.799-20.482-.004-28.28 6.268-6.194 48.885-36.588 101.319-73.035-36.446 52.434-66.84 95.049-73.032 101.315z" /><path d="M92.231 401.523l-24.69 12.044C49.475 381.325 40 345.338 40 308.499c0-26.991 4.977-52.842 14.06-76.683l28.291 13.57c2.79 1.338 5.735 1.972 8.636 1.972 7.453 0 14.608-4.185 18.047-11.355 4.776-9.959.576-21.906-9.384-26.683l-27.932-13.398c34.717-56.62 94.784-96.095 164.283-102.505v30.081c0 11.046 8.954 20 20 20s20-8.954 20-20V93.402c23.828 2.169 46.884 8.237 68.771 18.117 10.065 4.545 21.912.066 26.457-9.999 4.545-10.068.068-21.913-10-26.458C328.063 60.091 292.659 52.499 256 52.499c-68.38 0-132.667 26.628-181.02 74.98C26.629 175.832 0 240.119 0 308.499c0 50.53 14.998 99.674 43.373 142.115 3.822 5.715 10.141 8.886 16.639 8.886 2.954 0 5.946-.655 8.757-2.026l41-20c9.928-4.843 14.05-16.816 9.207-26.744-4.843-9.927-16.817-14.048-26.745-9.207zM489.436 203.271c-4.544-10.067-16.387-14.547-26.458-10-10.067 4.545-14.544 16.39-9.999 26.457C465.601 247.686 472 277.553 472 308.499c0 36.894-9.506 72.939-27.625 105.218l-25.777-12.275c-9.971-4.748-21.906-.515-26.656 9.459-4.749 9.972-.514 21.907 9.459 26.656l42 20c2.763 1.315 5.692 1.944 8.588 1.944 6.5 0 12.82-3.175 16.637-8.886C497.002 408.173 512 359.029 512 308.499c0-36.659-7.592-72.063-22.564-105.228z" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Vitesse d’exécution
            </h4>
          </div>
          <div class="w-1/2 py-4">
            <svg
              fill="none"
              :class="[svgClass]"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Créativité
            </h4>
          </div>
          <div class="w-1/2 py-4">
            <svg
              fill="none"
              :class="[svgClass]"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Rapport Qualité prix
            </h4>
          </div>
        </div>
      </div>
      <div class="w-full py-4 md:w-1/3">
        <fb-posts />
      </div>
      <div class="w-full py-4 md:w-1/3">
        <google-maps :display-title="true" />
      </div>
    </div>
  </div>
</template>

<script>
import title from './sub/generic-title.vue'
import fbPosts from './sub/fb-posts.vue'
import googleMaps from './sub/google-maps'
export default {
  components: {
    'generic-title': title,
    'fb-posts': fbPosts,
    'google-maps': googleMaps
  },
  data () {
    return {
      images: [
        'https://picsum.photos/400/400/?image=20',
        'https://picsum.photos/400/400/?image=19',
        'https://picsum.photos/400/400/?image=21'],
      svgClass: 'w-16 mx-auto text-gray-200 fill-current rounded-full bg-bmg-green-light p-2'
    }
  }
}
</script>

<style>

</style>
