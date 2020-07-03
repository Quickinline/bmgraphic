<template>
  <div class="bg-bmg-green pb-2">
    <h2 class="h2 text-white capitalize text-2xl text-center pt-2 font-baumans" v-text="pageName" />
    <div class="mx-auto">
      <h3 class="text-xs text-center font-semibold text-bmg-green-darken-20">
        <span v-for="node in pathway" :key="node.name">
          <nuxt-link v-if="node.link.length > 0" class="hover:underline" :to="node.link" v-text="node.name" />
          <span v-else v-text="node.name" />
          <span class="text-sm mx-4">&gt;</span>
        </span>
        <span class="capitalize" v-text="pageName" />
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: 'about'
    },
    pathway: {
      type: Array,
      default () {
        return [
          {
            name: 'Home',
            link: '/'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
