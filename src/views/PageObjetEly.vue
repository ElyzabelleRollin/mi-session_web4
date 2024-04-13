<script setup>
import { computed, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const routeId = computed(() => route.params.id);

const data = reactive({
  oeuvres: [],
});

const url = "https://api.harvardartmuseums.org/";
const type = "object/";
const cleAPI = "apikey=7c4a3a17-da3e-4661-91fe-602f96ff8a28";

onBeforeMount(() => {
  axios.get(url + type + routeId.value + "?" + cleAPI).then((response) => {
    data.oeuvres = response.data;
  });
});
</script>

<template>
  <div class="conteneur-details">
    <div class="conteneur-titre">
      <h1>{{ data.oeuvres.title }}</h1>
      <div class="image">
        <img :src="data.oeuvres.primaryimageurl" :alt="data.oeuvres.title" />
      </div>
    </div>
    <div class="infos">
      <section>
        <h2>Identification et création</h2>
        <div>
          <p><span>Numéro de l'objet:</span> {{ data.oeuvres.objectnumber }}</p>
          <p><span>Titre:</span> {{ data.oeuvres.title }}</p>
          <p v-for="oeuvre in data.oeuvres.people" :key="oeuvre.id">
            <span>Artiste:</span> {{ oeuvre.name }}
          </p>
          <p><span>Date: </span>{{ data.oeuvres.century }}</p>
        </div>
      </section>
      <section>
        <h2>Provenance</h2>
        <div>
          <p>{{ data.oeuvres.provenance }}</p>
        </div>
      </section>
      <section>
        <h2>Permission</h2>
        <div>
          <p>{{ data.oeuvres.creditline }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
