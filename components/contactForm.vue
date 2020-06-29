<template>
  <div class="my-4">
    <div v-for="input in inputList" :key="input.name" class="w-full p-2">
      <input v-model="input.value" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-green" :type="input.type" :placeholder="input.name">
    </div>
    <div class="w-full px-2 py-3">
      <textarea v-model="emailContent" class="outline-none w-full focus:shadow-outline-green rounded py-2 px-2" cols="30" rows="10" placeholder="Vôtre message" />
    </div>
    <div class="w-full p-2">
      <button class="bg-bmg-green text-gray-base py-2 px-3 rounded focus:outline-none focus:shadow-green text-white font-light text-md">
        Envoyer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputList: [
        {
          name: 'Vôtre Nom',
          type: 'text'
        },
        {
          name: 'Vôtre Email',
          type: 'email'
        },
        {
          name: 'Objet',
          type: 'text'
        }
      ],
      emailContent: ''
    }
  }

}
</script>

<style>

</style>
