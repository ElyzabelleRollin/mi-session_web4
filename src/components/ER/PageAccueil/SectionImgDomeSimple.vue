<script setup>
import { reactive, onBeforeMount} from 'vue'
import axios from 'axios'

const data = reactive({
  oeuvres: []
})

const oeuvresID = 199108
const url = 'https://api.harvardartmuseums.org/'
const type = 'object/'
const cleAPI = 'apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28'

onBeforeMount(async () => {
  try {
    const response = await axios.get(url + type + oeuvresID + "?" + cleAPI)
    data.oeuvres = response.data
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
  <div class="conteneur">
    <div class="conteneur-image">
        <img v-if="data.oeuvres.title" :src='data.oeuvres.primaryimageurl' class="img" alt="">
    </div>
    <div v-if="data.oeuvres.title" class="texte-centrer">
        <h3>{{ data.oeuvres.title }}</h3>
        <p :v-for="oeuvre in data.oeuvres">{{ data.oeuvres.people[0].name }}</p> 
    </div>
  </div>
</template>
