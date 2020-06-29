<template>
  <div :class="['relative cursor-pointer']" @click="displayModal()" @mouseover="display = true" @mouseleave="display = false">
    <img :src="src" :class="{'transform -translate-y-6 brightness-filter':display}" class="mx-auto transition-all duration-200" alt="">
    <div :class="['overlay',{'opacity-100':display},{'opacity-0':!display}]">
      <svg
        class="w-6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    <div :class="['modal',{'invisible opacity-0':hiddenModal},{'visible opacity-100':!hiddenModal}]">
      <div class="modal-content">
        <!-- <img :src="src" alt=""> -->
        this is a test text
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://picsum.photos/400/400/?image=20'
    }
  },
  data () {
    return {
      display: false,
      hiddenModal: true
    }
  },
  methods: {
    displayModal () {
      const vm = this
      vm.hiddenModal = false
      return vm
    }
  }
}
</script>

<style scoped>
.overlay{
  @apply flex flex-col-reverse justify-center items-center cursor-pointer absolute top-auto bottom-0 m-0 h-8 right-0 left-0 bg-bmg-green transition-opacity duration-200 ease-linear text-center
}
/* .overlay:hover{
  @apply opacity-75
} */
.brightness-filter{
  filter: opacity(0.8);
}
.modal{
  @apply z-30 fixed left-0 top-0 bottom-0 right-0 w-full h-full overflow-auto bg-transparent-black
}
.modal-content{
  @apply bg-gray-200 m-auto p-4 border border-bmg-green w-1/2
}
</style>
