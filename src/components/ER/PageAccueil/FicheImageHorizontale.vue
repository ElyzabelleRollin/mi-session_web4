<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

const data = ref({
  oeuvres: [],
});

const oeuvresID = [306366, 306359, 306319];
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
  <div class="conteneur-H">
    <div
      v-for="(art, index) in data.oeuvres"
      :key="index"
      class="fiche"
      :class="{ 'fiche-haut': index === 0, 'fiche-bas': index === 2 }"
    >
      <RouterLink
        v-if="art.id"
        :to="{ name: 'pageobjetely', params: { id: art.id } }"
      >
        <div
          class="conteneur-image"
          :class="{ 'conteneur-droite': index === 1 }"
        >
          <img
            :src="art.primaryimageurl"
            :alt="art.title"
            :class="{ 'img-droite': index === 1 }"
          />
        </div>
      </RouterLink>
      <div class="texte" :class="{ 'texte-droite': index === 1 }">
        <h3>{{ art.title }}</h3>
        <p>{{ art.people[0].name }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
