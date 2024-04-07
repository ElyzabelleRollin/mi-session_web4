<script setup></script>

<template>
  <div class="interface">
    <main>
      <div class="conteneur" v-for="oeuvreUnique in data.oeuvres" :key="oeuvreUnique.id">
        <div class="cadre">
          <img src="../assets/img/coins.svg" class="coins" />
          <img :src="oeuvreUnique.primaryimageurl" alt="yo" class="imageAnge" />
        </div>
        <!-- 🥐 -->
        <div class="flafla">
          <img src="../../../src/assets/img/motif.svg" alt="" />
        </div>
        <!-- 🥐 -->
        <div class="texte">
          <h1>titre: {{ oeuvreUnique.title }}</h1>
          <h2>artiste: {{ oeuvreUnique.people[0]["name"] }}</h2>
          <h2>provenance: {{ oeuvreUnique.culture }}</h2>
          <h2>année: {{ oeuvreUnique.dated }}</h2>
          <div class="bouton">
            <button>
              <RouterLink to="/PageObjetGab" query="id={{ oeuvreUnique.id }}"
                >Accéder à l'oeuvre</RouterLink
              >
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
