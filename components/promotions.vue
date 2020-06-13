<template>
  <div class="background-pattern pb-10 pt-5">
    <div class="container px-12 py-10 font-baumans text-2xl">
      <generic-title black-text="Promotions" gray-text="à ne pas manquer !" />
    </div>
    <div class="container justify-center flex flex-wrap">
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
              class="w-16 mx-auto text-gray-200 rounded-full bg-bmg-green-light p-2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Proximité
            </h4>
          </div>
          <div class="w-1/2 py-4">
            <svg
              fill="none"
              class="w-16 mx-auto text-gray-200 rounded-full bg-bmg-green-light p-2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Proximité
            </h4>
          </div>
          <div class="w-1/2 py-4">
            <svg
              fill="none"
              class="w-16 mx-auto text-gray-200 rounded-full bg-bmg-green-light p-2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Proximité
            </h4>
          </div>
          <div class="w-1/2 py-4">
            <svg
              fill="none"
              class="w-16 mx-auto text-gray-200 rounded-full bg-bmg-green-light p-2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            <h4 class="text-xl text-center font-baumans">
              Proximité
            </h4>
          </div>
        </div>
      </div>
      <div class="w-full py-4 md:w-1/3">
        <fb-posts />
      </div>
      <div class="w-full py-4 md:w-1/3">
        <h4 class="text-2xl font-baumans text-bmg-light-gray">
          Google-maps
        </h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12829.522054736!2d2.854836921945429!3d36.49667582992424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f095afee7099f%3A0x3fedc97a7582d48e!2sBm%20graphic!5e0!3m2!1sfr!2sdz!4v1591636899786!5m2!1sfr!2sdz"
          height="500"
          class="w-full"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import title from './sub/generic-title.vue'
import fbPosts from './sub/fb-posts.vue'

export default {
  components: {
    'generic-title': title,
    'fb-posts': fbPosts

  },
  data () {
    return {
      images: [
        'https://picsum.photos/400/400/?image=20',
        'https://picsum.photos/400/400/?image=19',
        'https://picsum.photos/400/400/?image=21'
      ]
    }
  }
}
</script>

<style>

</style>
