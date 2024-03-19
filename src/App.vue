<script setup>
import { RouterView } from "vue-router";
import HeaderApp from "@/components/commun/HeaderApp/HeaderApp.vue";
import FooterApp from "@/components/commun/FooterApp/FooterApp.vue";
</script>

<template>
  <div class="structure">
    <HeaderApp />
    <FooterApp />
    <h1>Structure de l'application</h1>
    <RouterView />
  </div>
</template>

<style scoped></style>
