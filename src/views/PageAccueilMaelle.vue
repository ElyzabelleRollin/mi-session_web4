<script setup>
import AffichageItems from "@/components/AffichageItemsMaelle/AffichageItems.vue";
</script>
<template>
  <div class="interface-maelle">
    <main>
      <div class="titre-maelle">
        <img
          src="/public/assets/img/logo/logo-maelle01.svg"
          alt="logo"
          class="logo"
        />
        <h2>Arma Antiqua</h2>
      </div>
      <div class="accueil">
        <div class="ligne-temps"></div>
        <div class="liste">
          <AffichageItems />
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
