<script setup>
  const props = defineProps({
        item : {
            type : Object,
            required: true,
        }
    });
</script>
<template>
  <div class="containerOeuvreC">
        <div class="nomOeuvreC">
            <h2>{{ props.item.title}}</h2> 
        </div>
        <div class="imagesOeuvreC">
            <RouterLink to="/pageobjetcharles"><img :src="props.item.images[0].baseimageurl" alt="oeuvre"></RouterLink>
        </div>
        <div class="backgroundOeuvreC"></div>
  </div>
</template>

<style></style>
