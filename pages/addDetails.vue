<template>
  <div class="container my-5 flex flex-col">
    <div class="mb-4">
      <label>Nom du Service:</label>
      <input v-model="serviceName" class="border-2 focus:outline-none rounded border-bmg-green px-2 py-1" type="text">
    </div>
    <div v-for="(detail,index) in detailList" :key="index" class="mb-2">
      <label>Titre: </label>
      <input v-model="detail.title" class="border-2 focus:outline-none rounded border-bmg-green px-2 py-1" type="text">
      <label class="ml-5">description: </label>
      <textarea v-model="detail.description" class="border-2 w-auto focus:outline-none rounded border-bmg-green px-2 py-1" />
    </div>
    <div>
      <button class="py-1 px-2 text-white font-bold bg-bmg-green rounded focus:outline-none" @click="detailList.push({title:'',description:''})">
        Ajouter un élément
      </button>
    </div>
    <div class="mt-4">
      <button class="py-1 px-2 text-white font-bold bg-blue-600 rounded focus:outline-none" @click="download()">
        Télécharger
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serviceName: 'communication-visuelle',
      detailList: [
        {
          title: 'titre',
          description: 'description'
        }
      ]
    }
  },
  methods: {
    download () {
      const vm = this
      const filename = vm.serviceName
      const content = JSON.stringify({
        name: filename,
        list: vm.detailList
      })
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
      element.setAttribute('download', filename)
      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()
      document.body.removeChild(element)
    }
  }
}
</script>

<style>

</style>
