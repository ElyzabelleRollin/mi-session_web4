<script setup>
import { reactive, onBeforeMount } from 'vue'
import axios from 'axios'

const data = reactive({
  oeuvres: {}
})

const oeuvresID = 311878
const url = 'https://api.harvardartmuseums.org/'
const type = 'object/'
const cleAPI = 'apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28'

onBeforeMount(async () => {
  try {
    const response = await axios.get(url + type + oeuvresID + "?" + cleAPI)
    data.oeuvres = response.data
    console.log(data.oeuvres.people[0].name)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div v-if="data.oeuvres.title" class="container-L">
    <div class="container-image">
      <img :src='data.oeuvres.primaryimageurl' class="img-L">
    </div>
    <div class="texte">
      <h3>{{ data.oeuvres.title }}</h3> 
      <p v-if="data.oeuvres.people.length > 0">{{ data.oeuvres.people[0].name }}</p> 
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<style></style>
