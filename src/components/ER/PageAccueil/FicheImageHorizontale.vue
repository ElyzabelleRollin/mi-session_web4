<script setup>
import axios from 'axios';
import {reactive, onBeforeMount} from 'vue';

const data = reactive({
  oeuvres: [],
})


onBeforeMount(() => {
  axios.get('https://api.harvardartmuseums.org/object?apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28')
  .then(response => {
      
      data.oeuvres = response.data.records[0].images[0].baseimageurl
      console.log(response.data)
      console.log(response.data.records[0].images[0].baseimageurl)
    
  })
  .catch(error =>{
      console.error(error)
  })
})

</script>

<template>
  <div class="">
    <div class="conteneur-img-horizontal">
        <img :src = "data.oeuvres" alt="">
    </div>
    <h3 >fbgnkfdfghnfndg</h3>
    <p>hf</p>
  </div>
</template>

<style></style>