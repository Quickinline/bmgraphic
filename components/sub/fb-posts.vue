<template>
  <div class="">
    <h4 class="text-2xl font-baumans text-bmg-light-gray">
      Suivez Nous
    </h4>
    <div
      class="fb-page w-full"
      :href="$globalVars().facebookPage"
      data-tabs="timeline"
      data-height=""
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    >
      <blockquote cite="https://www.facebook.com/Architecture-Bm-Graphic-154288835437275" class="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/Architecture-Bm-Graphic-154288835437275">Bm Graphic</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
const load = require('load-script')
export default {
  mounted () {
    load('https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v7.0&appId=257374912241023&autoLogAppEvents=1', function (err, script) {
      if (err) {
        // console.error('an error occured')
      } else {
        // console.log('script loaded')
      }
    })
  }
}
</script>

<style>
</style>
