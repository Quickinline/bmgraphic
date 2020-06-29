<template>
  <div>
    <h4 v-if="displayTitle" class="text-2xl font-baumans text-bmg-light-gray">
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
</template>

<script>
export default {
  props: {
    displayTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
