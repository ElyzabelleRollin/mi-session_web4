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
            src="/assets/img/georgia-de-lotz--3xSBrSzTjg-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Floralis</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none d-md-block">
              Bienvenue à notre exposition virtuelle dédiée à la nature !
              Explorez sa beauté, sa vitalité et son importance.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/assets/img/fia-yang-id5flV_U-Yc-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Nota temporis</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none d-md-block">
              Plongez dans la richesse artistique de la peinture à l'encre asiatique à travers une exposition captivante mettant en avant l'évolution de cette technique emblématique du XXe siècle.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/assets/img/rhii-photography-EZpvFGUYZKo-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <div class="nom">
              <span class="deco avant"></span>
              <h5>Arma antiqua</h5>
              <span class="deco apres"></span>
            </div>
            <p class="d-none d-md-block">
              Explorez un arsenal fascinant d'armes anciennes, des épées épiques aux armures légendaires, et découvrez les secrets de leur fabrication et de leur utilisation. Une immersion captivante dans le passé martial qui vous laissera émerveillé par l'ingéniosité et la puissance des civilisations disparues.
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
            <p class="d-none d-md-block">
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
