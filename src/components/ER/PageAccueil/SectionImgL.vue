<script setup>
    import {ref, onBeforeMount} from 'vue'
    import axios from 'axios'

    const data = ref({
  arts: []
})

// const oeuvresID = [360615, 360614, 199108, 306359, 360606, 306403, 311878, 295089, 306319, 360634, 360610, 306366]
const oeuvresID = 295089
const url = 'https://api.harvardartmuseums.org/'
const type = 'object/'
const cleAPI = 'apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28'

onBeforeMount( () => {
  axios.get(url + type + oeuvresID + "?" + cleAPI)
  .then(response => {
    data.value.arts = response.data
    console.log(data.value.arts)
    
  })
  .catch(error => {
    console.error(error)
  })
})
</script>

<template>
  <div class="container-L">
    <img :src='data.arts.primaryimageurl' class="img-L">
     <div>
      <h3>{{ data.arts.title }}</h3> 
      <!-- <p>{{arts.people[0].name}}</p>  -->
    </div>
  </div>
</template>

<style></style>