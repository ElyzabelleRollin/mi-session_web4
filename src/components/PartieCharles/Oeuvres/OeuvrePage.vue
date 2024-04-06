<script setup>
    const props = defineProps({
        item : {
            type : Object,
            required: true,
        }
    });
</script>
<template>
  <div class="containerOeuvrePreciseC">
        <div class="nomOeuvrePreciseC">
            <h2>{{ props.item.title}}</h2> 
        </div>
        <div class="imagesOeuvrePreciseC">
            <img :src="props.item.images[0].baseimageurl" :alt="props.item.title">
        </div>

        <div class="descriptionOeuvrePreciseC">
          <p class="titreDesC">Description</p>
          <p class="desC"> {{ props.item.description }} </p>
          <p class="titreDesC">credit</p>
          <p class="desC"> {{ props.item.creditline }} </p>
          <p class="titreDesC">date</p>
          <p class="desC"> {{ props.item.dated }} </p>
        
        </div>


        <div class="btnRtrn">
          <RouterLink to="/PageAccueilCharles"> Retour </RouterLink>
        </div>
  </div>
</template>

<style></style>
