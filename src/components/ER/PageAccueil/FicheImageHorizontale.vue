<script setup>
  import {ref, onBeforeMount} from 'vue'
  import axios from 'axios'

  const data = ref({
    oeuvres: []
  })

  // const oeuvresID = [360615, 360614, 199108, 306359, 360606, 306403, 311878, 295089, 306319, 360634, 360610, 306366]
  const oeuvresID = [306366,306359, 306319]
  const url = 'https://api.harvardartmuseums.org/'
  const type = 'object/'
  const cleAPI = 'apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28'

  onBeforeMount(async () => {
    try {
      for (const oeuvreID of oeuvresID) {
        const response = await axios.get(url + type + oeuvreID + "?" + cleAPI)
        data.value.oeuvres.push(response.data)
      }
    } catch (error) {
      console.error(error);
    }
  });


</script>

<template>
  <div class="conteneur">
    <div v-for="(art, index) in data.oeuvres" :key="index"  >
      <div class="conteneur-img-horizontal" :class="{ 'conteneur-droite': index === 1 }">
          <img :src = 'art.primaryimageurl' alt="" 
          :class="{ 'img-droite': index === 1 }">
      </div>
      <div class="texte">
        <h3>{{ art.title }}</h3> 
        <p>{{ art.people[0].name }}</p> 
      </div>
    </div>
  </div>
</template>

<style></style>