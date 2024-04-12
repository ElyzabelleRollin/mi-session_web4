<script setup>
import { reactive, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const routeId = computed(() => route.params.id);
const data = reactive({
  oeuvreUnique: [],
});

const url = "https://api.harvardartmuseums.org/object/";
const apiKEY = "?apikey=ebb8cc4d-08b7-437c-9781-0a0f895a6d6a";

onBeforeMount(() => {
  axios.get(url + routeId.value + apiKEY).then((response) => {
    data.oeuvreUnique = response.data;
    console.log(data.oeuvreUnique.marks[0]["text"]);
  });
});
</script>
<template>
  <div class="Detail">
    <main>
      <div class="conteneurDetail">
        <div class="cadre">
          <img src="../../assets/img/coins.svg" class="coins" />
          <img :src="data.oeuvreUnique.primaryimageurl" alt="yo" class="imageAnge" />
        </div>
        <!-- 🥐 -->
        <div class="flafla">
          <img src="../../../src/assets/img/motif.svg" alt="" />
        </div>
        <!-- 🥐 -->
        <div class="texteGab">
          <h1>titre: {{ data.oeuvreUnique.title }}</h1>
          <!-- <h2>artiste:{{ data.oeuvreUnique.people[0]["name"] }}</h2> -->
          <h2>provenance:{{ data.oeuvreUnique.culture }}</h2>
          <h2>année:{{ data.oeuvreUnique.dated }}</h2>
          description:
          <p v-for="oeuvreUnique in data.oeuvreUnique.marks" :key="oeuvreUnique.id">
            {{ oeuvreUnique.text }}
          </p>
          <p>détails: {{ data.oeuvreUnique.verificationleveldescription }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
