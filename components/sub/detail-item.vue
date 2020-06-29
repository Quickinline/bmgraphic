<template>
  <div>
    <button class="font-bold text-gray-base cursor-pointer focus:outline-none" @click="show = !show">
      <svg
        class="w-4 inline"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      ><path d="M9 5l7 7-7 7" /></svg>
      {{ detail.name }}
    </button>
    <span v-if="show" :class="['block ml-6 whitespace-pre-line']" v-text="detail.description" />
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default () {
        return {
          name: 'test Détail',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore libero ratione quae, quaerat ducimus inventore nobis perspiciatis molestias, sequi totam ea numquam omnis error mollitia adipisci, suscipit consectetur sunt fugit.'
        }
      }
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
