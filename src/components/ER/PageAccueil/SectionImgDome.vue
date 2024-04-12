<script setup>
import { RouterLink } from "vue-router";
import { ref, onBeforeMount } from "vue";
import axios from "axios";

const data = ref({
  oeuvres: [],
});

const oeuvresID = [295089, 199108];
const url = "https://api.harvardartmuseums.org/";
const type = "object/";
const cleAPI = "apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28";

onBeforeMount(async () => {
  try {
    for (const oeuvreID of oeuvresID) {
      const response = await axios.get(url + type + oeuvreID + "?" + cleAPI);
      data.value.oeuvres.push(response.data);
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="conteneur-D" v-for="(oeuvre, index) in data.oeuvres" :key="index">
    <div class="conteneur-image">
      <RouterLink
        v-if="oeuvre.id"
        :to="{ name: 'pageobjetely', params: { id: oeuvre.id } }"
      >
        <img
          v-if="oeuvre.title"
          :src="oeuvre.primaryimageurl"
          class="img"
          :class="{ deplacement: index === 0 }"
          :alt="oeuvre.title"
        />
      </RouterLink>
    </div>
    <div v-if="oeuvre.title" class="texte-centrer">
      <h3>{{ oeuvre.title }}</h3>
      <p>{{ oeuvre.people[0].name }}</p>
    </div>
  </div>
</template>
