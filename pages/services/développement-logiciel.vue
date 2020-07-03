<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="sm:text-center lg:text-left pt-6">
              <h2 class="text-4xl tracking-tight capitalize font-baumans leading-10 font-normal text-gray-base sm:text-5xl sm:leading-none md:text-6xl">
                Quand l'
                <span class="inline text-bmg-green">
                  innovation
                </span>
                rencontre l'
                <span class="text-bmg-green">excellence</span>
              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Du Développement Web, Mobile et Desktop... à l'IOT, Réalité Augmenté et plusieurs technologies modernes. BmGraphic prends soin de vos Besoins en termes de Data grâce à des Solutions technlogiques adaptées
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a :href="enSavoirPlus" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-bmg-green hover:bg-bmg-green-light focus:outline-none focus:border-bmg-green-darken-10 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8">
                    En Savoir Plus
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/working-programmer.jpeg" alt="">
      </div>
    </div>
    <div class="bg-gray-100 py-8">
      <h2 class="text-3xl text-gray-base capitalize font-bold font-baumans tracking-wider text-center py-4">
        une pléthora de Services disponibles
      </h2>
      <div class="container flex flex-row flex-wrap">
        <div v-for="feature in features" :key="feature.heading" class="w-full md:w-1/2 py-6 text-bmg-green">
          <feature-component
            :heading="feature.heading"
            :description="feature.description"
            :svg="feature.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feature from '~/components/sub/feature-component'
export default {
  components: {
    'feature-component': feature
  },
  data () {
    return {
      enSavoirPlus: '#',
      svgClass: 'fill-current w-24 mx-auto',
      features: [
        {
          heading: 'Développement Web',
          description: 'La porte du future est le Web. Grâce aux technologies {#}frontend{#} les plus neuves comme VueJS, où ReactJS et des {#}infrastructures Backend{#} puissantes et modulaires {#}BM{#}Graphic s\'engage à vous offrir le meilleur de la technologie',
          svg: '/svg/tab.svg'
        },
        {
          heading: 'Applications Mobiles',
          description: 'Sur {#}Android{#} et {#}IOS{#}, BM Graphic vous propose des {#}Applications Robustes au Design Adapté{#} à vos Besoin.',
          svg: '/svg/gear.svg'
        },
        {
          heading: 'IOT',
          description: 'Débloquer les pouvoirs du Data et innovez en la gestion d\'atouts Gràce à l\'IOT, Des Systèmes interconnectés {#}Robustes{#} et {#}Durables{#}',
          svg: '/svg/relationship.svg'
        },
        {
          heading: 'UX/UI Design',
          description: 'Des {#}Interfaces Modernes Adaptées{#} à vos besoins et compatible avec l\'image de {#}vôtre Marque{#} Avec Une Expérience d\'utilisation {#}Agréable et Fluide{#}',
          svg: '/svg/ux.svg'
        }
      ]
    }
  }
}
</script>

<style>
</style>
