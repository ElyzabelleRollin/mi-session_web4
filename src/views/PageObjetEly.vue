<script setup>
import { computed, onBeforeMount, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'

const route = useRoute();
const routeId = computed(() => route.params.id);

const data = reactive({
  oeuvres: []
})

console.log(routeId);
const url = 'https://api.harvardartmuseums.org/'
const type = 'object/'
const cleAPI = 'apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28'

onBeforeMount(() => {
  axios.get(url + type + routeId.value + "?" + cleAPI)
    .then(response =>{
      data.oeuvres = response.data;
      console.log(data.oeuvres)
  })
})
</script>


<template>
  <div>
    <h1>{{ data.oeuvres.title }}</h1>
    <p v-for="oeuvre in data.oeuvres.people" :key="oeuvre.id">{{ oeuvre.name }}</p>
    <img :src="data.oeuvres.primaryimageurl" alt="">
  </div>
</template>

<style></style>
