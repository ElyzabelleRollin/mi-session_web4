<script setup>
import { reactive, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import axios from "axios";

const route = useRoute();
const routeId = computed(() => route.params.id);
const API = "https://api.harvardartmuseums.org/";
const TYPE = "object/";
const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";

const data = reactive({
  detailItem: null,
  itemImg: null,
  id: null,
});

onBeforeMount(() => {
  data.id = routeId;

  axios
    .get(API + TYPE + data.id + "?" + KEY)
    .then((response) => {
      data.detailItem = response.data;

      if (data.detailItem.images.length === 0) {
        data.itemImg = "/assets/img/png/sans_image.png";
      } else {
        data.itemImg = data.detailItem.images[0].baseimageurl;
      }
      console.log(data.detailItem);
    })
    .catch((error) => {
      console.error("Erreur à la sélection : ", error);
    });
});
</script>
<template>
  <div class="interface-maelle">
    <main class="detail-maelle">
      <div class="titre">
        <img src="/assets/img/logo/logo-maelle01.svg" alt="logo" class="logo" />
        <h2>Arma Antiqua</h2>
      </div>
      <p class="nom-oeuvre-maelle" v-text="data.detailItem.title"></p>

      <div class="info-type-maelle info">
        <p class="type-oeuvre">
          Type : {{ data.detailItem.worktypes[0].worktype }}
        </p>
      </div>

      <div class="info-annee-maelle info">
        <p class="annee-oeuvre">Année : {{ data.detailItem.dated }}:</p>
      </div>

      <div class="info-periode-maelle info">
        <p class="periode-oeuvre" v-if="data.detailItem.period">
          Période : {{ data.detailItem.period }}
        </p>
        <p class="periode-oeuvre" v-else>Aucune période précise</p>
      </div>

      <div class="img-detail-maelle">
        <img :src="data.itemImg" :alt="data.detailItem.title" />
      </div>

      <div class="info-dimension-maelle">
        <p class="dimension-oeuvre">
          Dimension: {{ data.detailItem.dimensions }}
        </p>
      </div>

      <div class="info-description-maelle">
        <div class="contour-description"></div>
        <p class="description">Description</p>
        <p class="description-oeuvre" v-if="data.detailItem.description">
          {{ data.detailItem.description }}
        </p>
        <p class="description-oeuvre sans-description-oeuvre" v-else>
          Aucune description
        </p>
      </div>

      <div class="info-permission-maelle">
        <p class="permission-oeuvre" v-text="data.detailItem.permission"></p>
      </div>

      <RouterLink :to="{ name: 'pageaccueilmaelle' }" class="link"
        >Retourner</RouterLink
      >
    </main>
  </div>
</template>

<style></style>
