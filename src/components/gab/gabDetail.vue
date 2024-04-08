<script setup>
import { reactive, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const data = reactive({
  oeuvreUnique: [],
});

const url = "https://api.harvardartmuseums.org/object/";
const apiKEY = "?apikey=ebb8cc4d-08b7-437c-9781-0a0f895a6d6a";

onBeforeMount(() => {
  const routeId = computed(() => route.params.id);
  axios.get(url + routeId.value + apiKEY).then((response) => {
    data.oeuvreUnique = response.data;
    console.log(data.oeuvreUnique);
  });
});
</script>
<template>
  <div class="interface">
    <main>
      <h1>{{ data.oeuvreUnique.title }}</h1>
    </main>
  </div>
</template>

<style></style>
