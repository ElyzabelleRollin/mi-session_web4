<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import gabImage from "../components/gab/gabImage.vue";
import gabLogo from "../components/gab/gabLogo.vue";
const url = "https://api.harvardartmuseums.org/object/";
const apiKEY = "?apikey=ebb8cc4d-08b7-437c-9781-0a0f895a6d6a";

const oeuvresID = [326451, 274090, 273766, 273720, 274767, 274191];
const data = ref({
  oeuvres: [],
});

onBeforeMount(() => {
  for (let i = 0; i < oeuvresID.length; i++) {
    axios.get(url + oeuvresID[i] + apiKEY).then((response) => {
      data.value.oeuvres.push(response.data);
    });
  }
});
</script>
<template>
  <div class="Gab">
    <gabLogo />
    <gabImage />
    <main>
      <div
        class="conteneurImages"
        v-for="oeuvreUnique in data.oeuvres"
        :key="oeuvreUnique.id"
      >
        <div class="cadre">
          <img src="/assets/img/coins.svg" class="coins" />
          <img :src="oeuvreUnique.primaryimageurl" alt="imageAnge" class="imageAnge" />
          <div class="transparence"></div>
        </div>

        <div class="texteGab">
          <h1>titre: {{ oeuvreUnique.title }}</h1>
          <h2>artiste: {{ oeuvreUnique.people[0]["name"] }}</h2>
          <h2>provenance: {{ oeuvreUnique.culture }}</h2>
          <h2>année: {{ oeuvreUnique.dated }}</h2>

          <div class="bouton">
            <button>
              <RouterLink :to="{ name: 'pageobjetgab', params: { id: oeuvreUnique.id } }"
                >Accéder à l'oeuvre
              </RouterLink>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
