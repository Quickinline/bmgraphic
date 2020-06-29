<template>
  <div>
    <page-indicator :page-name="currentService.formattedName" :pathway="pathway" />
    <service-info :images="currentService.images" :details="currentService.details" :title="format(currentService.name)" class="py-8" />
    <service-card-list :card-list="currentService.cardList" />
  </div>
</template>

<script>
import pageIndicator from '~/components/global/pageIndicator'
import serviceInfo from '~/components/serviceInfo'
import serviceCardList from '~/components/serviceCardList'
export default {
  validate ({ params, store }) {
    return store.state.services.list.find(service => service.name === params.name) != null
  },
  components: {
    'page-indicator': pageIndicator,
    'service-info': serviceInfo,
    'service-card-list': serviceCardList
  },
  data () {
    return {
      pathway: [{ name: 'Services', link: '#' }]
    }
  },
  computed: {
    currentService () {
      const current = this.$store.state.services.list.find(service => service.name === this.$route.params.name)
      if (current != null) {
        current.formattedName = this.$store.getters['services/formattedName'](current.name)
      }
      return current
    }
  },
  methods: {
    format (name) {
      return this.$store.getters['services/formattedName'](name)
    }
  }
}
</script>

<style>

</style>
