<script setup>
import Caroussel from "@/components/commun/HeaderApp/SectionCaroussel.vue";
import Hamburger from "@/components/commun/HeaderApp/MenuHamburger.vue";
import Menu from "@/components/commun/HeaderApp/MenuPrincipal.vue";
</script>
<template>
  <div class="interface">
    <header>
      <Hamburger />
      <div class="conteneur-header">
        <Menu />
        <Caroussel />
      </div>
    </header>
  </div>
</template>

<style></style>
