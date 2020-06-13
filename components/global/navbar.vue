<template>
  <div class="bg-gray-100 font-roboto">
    <div class="bg-bmg-light-gray py-1">
      <div class="container text-gray-300 font-semibold text-xs">
        <div class="inline mx-2">
          Impression & Signalétique
        </div>
        <div class="inline mx-2">
          <a href="tel:+">
            <svg class="inline text-gray-300 fill-current w-3" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" /></svg>
            0524 05 52 80
          </a>
        </div>
        <div class="inline mx-2">
          <a href="mailto:">
            <svg class="inline text-gray-300 fill-current w-3" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" /></svg>
            contact@bmgraphic.com
          </a>
        </div>
      </div>
    </div>
    <nav class="flex container items-center lg:items-end justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white my-2 mr-6">
        <img src="~assets/svg/logo.svg" class="w-48" alt srcset>
      </div>
      <div class="block md:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex flex-row">
          <div v-for="(nav,index) in navs" :key="nav.name" class="border-r py-2">
            <dropdown
              v-if="nav.sub.length > 0"
              class=""
              :btn-text="nav.name"
              btn-class="md:py-2 md:px-2 text-base sm:block text-gray-600 font-semibold hover:text-bmg-green-light lg:mt-0 mt-4 lg:mx-2 lg:inline-block cursor-pointer"
              menu-class="relative md:absolute md:bg-white md:border w-48 rounded md:left-0"
              :to="nav.link"
              hover
            >
              <div slot="menu">
                <router-link
                  v-for="sub in nav.sub"
                  :key="sub.name"
                  href="#responsive-header"
                  class="block border-b font-light pl-1 hover:bg-gray-300 py-2 text-gray-700 hover:text-black"
                  :to="sub.link"
                  v-text="sub.name"
                />
              </div>
            </dropdown>
            <router-link
              v-else
              :to="nav.link"
              class="md:py-2 md:px-2 block text-base mt-4 lg:inline-block font-semibold hover:text-bmg-green-light lg:mt-0 text-gray-600 lg:mx-2"
              v-text="nav.name"
            />
            <div v-if="index != navs.length-1" class="border-r border-gray-900 w-0 h-100" />
          </div>
        </div>
        <div />
      </div>
    </nav>
    <div class="h-1 w-100 bg-bmg-green" />
  </div>
</template>

<script>
import TailwindDropdownVue from 'tailwind-dropdown-vue'
export default {
  components: {
    dropdown: TailwindDropdownVue
  },
  data () {
    return {
      navs: [
        {
          name: 'ACCUEIL',
          link: '/',
          sub: []
        },
        {
          name: 'A PROPOS',
          link: '/about',
          sub: []
        },
        {
          name: 'SERVICES',
          link: '#',
          sub: [
            {
              name: 'Communication Visuelle',
              link: '#'
            },
            {
              name: 'Impression Petit Format',
              link: '#'
            },
            {
              name: 'Impression Grand Format',
              link: '#'
            },
            {
              name: 'Enseignes & Signalétique',
              link: '#'
            },
            {
              name: 'Marquage Véhicules',
              link: '#'
            },
            {
              name: 'PLV & Stand',
              link: '#'
            },
            {
              name: 'Marquage Textile',
              link: '#'
            }
          ]
        },
        {
          name: 'BOUTIQUE',
          link: '#',
          sub: [
            {
              name: 'Cadeaux ',
              link: 'Hi'
            }
          ]
        },
        {
          name: 'CONTACT',
          link: '#',
          sub: []
        }
      ]
    }
  }
}
</script>

<style>
</style>
