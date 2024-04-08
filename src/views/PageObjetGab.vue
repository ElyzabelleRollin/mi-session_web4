<script setup>
import gabDetail from "../components/gab/gabDetail.vue";
import gabLogo from "../components/gab/gabLogo.vue";
</script>
<template>
  <div class="Gab">
    <main>
      <div class="unObjet">
        <gabLogo />
        <gabDetail></gabDetail>
        <div class="conteneur">
          <div class="cadre">
            <img src="../assets/img/coins.svg" class="coins" />
            <!-- <img :src="oeuvres.primaryimageurl" alt="yo" class="imageAnge" /> -->
          </div>
          <!-- 🥐 -->
          <div class="flafla">
            <img src="../../../src/assets/img/motif.svg" alt="" />
          </div>
          <!-- 🥐 -->
          <div class="texte">
            <h1>titre:</h1>
            <h2>artiste:</h2>
            <h2>provenance:</h2>
            <h2>année:</h2>
            <p>description:</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
