<template>
  <div class="py-0 md:py-24">
    <img class="mx-auto py-4 h-64" src="~assets/svg/undraw_page_not_found.svg" alt="" srcset="">
    <h2 class="text-3xl text-center">
      Oops !
    </h2>
    <h3 class="text-xl text-center">
      La page que vous recherchez semble introuvable
    </h3>
    <div class="text-center my-4">
      <nuxt-link to="/" class=" py-2 px-2 rounded shadow-xl text-gray-base  bg-bmg-green text-center">
        Retournez à l'écran d'Accueil
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'none'
}
</script>

<style>

</style>
