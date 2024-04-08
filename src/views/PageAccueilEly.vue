<script setup>
//--------------------------------------------
// Importation de composants
//--------------------------------------------
import intro from "@/components/ER/PageAccueil/SectionIntro.vue";
import imgHorizontale from "@/components/ER/PageAccueil/FicheImageHorizontale.vue";
import sectionImgL from "@/components/ER/PageAccueil/SectionImgL.vue";
import sectionImgPleine from "@/components/ER/PageAccueil/SectionImgPleine.vue";
import SectionImgDome from "@/components/ER/PageAccueil/SectionImgDome.vue";
// import SectionImgDomeSimple from "@/components/ER/PageAccueil/SectionImgDomeSimple.vue";
</script>
<template>
  <div class="interface pageEly">
    <main>
      <intro />
      <imgHorizontale />
      <sectionImgL />
      <sectionImgPleine />
      <SectionImgDome />
      <!-- <SectionImgDomeSimple /> -->
    </main>
  </div>
</template>

<style></style>
