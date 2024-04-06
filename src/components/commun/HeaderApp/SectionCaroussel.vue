<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>

<template>
  <div>
    <div id="caroussel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#caroussel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#caroussel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#caroussel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#caroussel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner item">
        <div class="carousel-item active">
          <img
            src="/assets/img/eric-park-QbX8A8eHfzw-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Floralis</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none">
              Bienvenue à notre exposition virtuelle dédiée à la nature !
              Explorez sa beauté, sa vitalité et son importance. Des montagnes
              aux profondeurs marines, découvrez son rôle essentiel. L'art,
              l'inspiration, et la nécessité de la préserver vous attendent.
              Plongez dans cet univers captivant dès maintenant !
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/assets/img/aaina-sharma-nqj3ncOPS0g-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Charle</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none">
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/assets/img/eric-park-QbX8A8eHfzw-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Mawelle</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none">
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/assets/img/brooklyn-MO5qO9xpZhA-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Agapè</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none">
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
