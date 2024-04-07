<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <div id="menu-hamburger">
    <div class="nav-mobile">
      <button @click="toggleMenu" class="hamburger">
        <img src="/assets/img/menuHamburger.svg" alt="" />
      </button>
      <div>
        <RouterLink to="/PageIndex.vue">
          <img class="logo" src="/assets/img/Logo_musee.svg" alt="" />
        </RouterLink>
      </div>
    </div>
    <nav v-if="isMenuOpen" class="menu">
      <!-- Your menu items here -->
      <ul>
        <li><RouterLink to="/PageAccueilEly">Floralis</RouterLink></li>
        <li><RouterLink to="/PageAccueilCharle">Charle</RouterLink></li>
        <li><RouterLink to="/PageAccueilMaelle">Mawelle</RouterLink></li>
        <li><RouterLink to="/PageAccueilGab">Agapè</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
