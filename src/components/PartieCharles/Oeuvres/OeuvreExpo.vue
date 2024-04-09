<script setup>

    const props = defineProps({
        item : {
            type : Object,
            required: true,
        }
    });

</script>

<template>
  <div class="oeuvreExpoC">
        <div class="titreOeuvreC">
            <h2>{{ props.item.title}}</h2> 
        </div>
        <div class="imgOeuvreC">
            <RouterLink :to="{name: 'pagedescharles.details', params: {id: props.item.id}}"><img :src="props.item.images[0].baseimageurl" alt="oeuvre"></RouterLink>
        </div>
        <div class="backdropOeuvreC"></div>
  </div>
</template>

<style>
</style>
