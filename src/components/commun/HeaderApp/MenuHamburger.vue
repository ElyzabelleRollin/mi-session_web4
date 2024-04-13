<script>
export default {
  data() {
    return {
      menuOuvert: false,
    };
  },
  methods: {
    ouvrirMenu() {
      this.menuOuvert = !this.menuOuvert;
    },
  },
};
</script>

<template>
  <div id="menu-hamburger">
    <div class="nav-mobile">
      <button @click="ouvrirMenu" class="hamburger">
        <img src="/assets/img/menuHamburger.svg" alt="" />
      </button>
      <div>
        <RouterLink to="/PageIndex.vue">
          <img class="logo" src="/assets/img/Logo_musee.svg" alt="" />
        </RouterLink>
      </div>
    </div>
    <nav v-if="menuOuvert" class="menu">
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/PageAccueilEly">Floralis</RouterLink></li>
        <li><RouterLink to="/pageexpoeharles">Nota temporis</RouterLink></li>
        <li><RouterLink to="/PageAccueilGab">Agapè</RouterLink></li>
        <li><RouterLink to="/PageAccueilMaelle">Arma antiqua</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
