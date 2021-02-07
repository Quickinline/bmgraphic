<template>
  <div class="bg-white font-roboto">
    <div class="bg-bmg-light-gray py-1 md:py-3">
      <div class="container flex flex-row flex-wrap justify-center md:justify-between text-gray-300 font-semibold text-xs">
        <div class="flex flex-row">
          <div class="inline mx-2 hidden md:block">
            Impression & Signalétique
          </div>
          <div class="inline mx-2">
            <a :href="'tel:+'+$globalVars().phone">
              <svg class="inline text-gray-300 fill-current w-3" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" /></svg>
              {{ $globalVars().phone }}
            </a>
          </div>
          <div class="inline mx-2">
            <a href="mailto:">
              <svg class="inline text-gray-300 fill-current w-3" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" /></svg>
              {{ $globalVars().email }}
            </a>
          </div>
        </div>
        <div class="mx-4 flex flex-row">
          <a :href="$globalVars().facebookPage">
            <svg :class="[socialSVGClass]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg>
          </a>
          <a :href="$globalVars().instagramPage">
            <svg :class="[socialSVGClass]" viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg">
              <path d="M510.9492 150.5c-1.1992-27.1992-5.5976-45.8984-11.8984-62.1016-6.5-17.1992-16.5-32.5976-29.6016-45.3984-12.8008-13-28.3008-23.1016-45.3008-29.5C407.8516 7.1992 389.25 2.8008 362.0508 1.6016 334.6484.3008 325.9492 0 256.4492 0s-78.1992.3008-105.5 1.5C123.75 2.6992 105.0508 7.1016 88.8516 13.3984 71.6484 19.8984 56.25 29.8984 43.4492 43c-13 12.8008-23.0976 28.3008-29.5 45.3008C7.6484 104.6016 3.25 123.1992 2.0508 150.3984.75 177.8008.4492 186.5.4492 256s.3008 78.1992 1.5 105.5c1.1992 27.1992 5.6016 45.8984 11.9024 62.1016 6.5 17.1992 16.5976 32.5976 29.5976 45.3984C56.25 482 71.75 492.1016 88.75 498.5c16.3008 6.3008 34.8984 10.6992 62.1016 11.8984 27.2968 1.2032 36 1.5 105.5 1.5s78.1992-.2968 105.5-1.5c27.1992-1.1992 45.8984-5.5976 62.0976-11.8984 34.4024-13.3008 61.6016-40.5 74.9024-74.8984 6.2968-16.3008 10.6992-34.9024 11.8984-62.1016 1.1992-27.3008 1.5-36 1.5-105.5s-.1016-78.1992-1.3008-105.5zm-46.0976 209c-1.1016 25-5.3008 38.5-8.8008 47.5-8.6016 22.3008-26.3008 40-48.6016 48.6016-9 3.5-22.5976 7.6992-47.5 8.7968-27 1.2032-35.0976 1.5-103.3984 1.5s-76.5-.2968-103.4024-1.5c-25-1.0976-38.5-5.2968-47.5-8.7968C94.5508 451.5 84.4492 445 76.25 436.5c-8.5-8.3008-15-18.3008-19.1016-29.3984-3.5-9-7.6992-22.6016-8.7968-47.5-1.2032-27-1.5-35.1016-1.5-103.4024s.2968-76.5 1.5-103.3984c1.0976-25 5.2968-38.5 8.7968-47.5C61.25 94.1992 67.75 84.1016 76.3516 75.8984c8.2968-8.5 18.2968-15 29.3984-19.0976 9-3.5 22.6016-7.6992 47.5-8.8008 27-1.1992 35.1016-1.5 103.3984-1.5 68.4024 0 76.5.3008 103.4024 1.5 25 1.1016 38.5 5.3008 47.5 8.8008 11.0976 4.0976 21.1992 10.5976 29.3984 19.0976 8.5 8.3008 15 18.3008 19.1016 29.4024 3.5 9 7.6992 22.5976 8.8008 47.5 1.1992 27 1.5 35.0976 1.5 103.3984s-.3008 76.3008-1.5 103.3008zm0 0" /><path d="M256.4492 124.5c-72.5976 0-131.5 58.8984-131.5 131.5s58.9024 131.5 131.5 131.5c72.6016 0 131.5-58.8984 131.5-131.5s-58.8984-131.5-131.5-131.5zm0 216.8008c-47.0976 0-85.3008-38.1992-85.3008-85.3008s38.2032-85.3008 85.3008-85.3008c47.1016 0 85.3008 38.1992 85.3008 85.3008s-38.1992 85.3008-85.3008 85.3008zm0 0M423.8516 119.3008c0 16.9531-13.7461 30.6992-30.7032 30.6992-16.953 0-30.6992-13.746-30.6992-30.6992 0-16.957 13.7461-30.6992 30.6992-30.6992 16.957 0 30.7032 13.7421 30.7032 30.6992zm0 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <nav class="container w-full flex bg-white items-center lg:items-end justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white my-2 mr-6">
        <router-link
          to="/"
        >
          <img src="~assets/svg/logo.svg" class="w-48" alt srcset>
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          @click="opened = !opened"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="[{'hidden':opened,'block':!opened},'w-full flex-grow justify-end lg:flex lg:items-center duration-200 lg:w-auto']">
        <div class="text-sm lg:flex flex-row">
          <div v-for="(nav,index) in navs" :key="nav.name" class="border-r py-2">
            <dropdown
              v-if="nav.sub.length > 0"
              class=""
              :btn-text="nav.name"
              btn-class="md:py-2 md:px-2 uppercase text-base sm:block text-gray-600 font-normal hover:text-bmg-green-light mt-4 lg:mt-0 lg:mx-2 lg:inline-block cursor-pointer"
              menu-class="relative md:absolute md:bg-white md:border w-64 rounded md:left-0"
              :to="nav.link"
              hover
            >
              <div slot="menu">
                <router-link
                  v-for="sub in nav.sub"
                  :key="sub.name"
                  href="#responsive-header"
                  class="block border-b font-light hover:bg-gray-300 py-2 pl-4 pr-4 text-gray-700 hover:text-black"
                  :to="'/services/'+sub.name"
                  v-text="format(sub.name)"
                />
              </div>
            </dropdown>
            <router-link
              v-else
              :to="nav.link"
              class="md:py-2 md:px-2 block text-base mt-4 lg:inline-block font-normal hover:text-bmg-green-light lg:mt-0 text-gray-600 lg:mx-2"
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
      socialSVGClass: 'w-4 mx-1 fill-current text-white',
      opened: true,
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
          name: 'services',
          link: '#',
          sub: this.$store.state.services.list
        },
        {
          name: 'boutique',
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
          link: '/contact',
          sub: []
        }
      ]
    }
  },
  methods: {
    format (string) {
      string = string.replace(/-/g, ' ')
      return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
    }
  }
}
</script>

<style>
</style>
