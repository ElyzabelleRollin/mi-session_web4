<script setup>
    import {reactive, onBeforeMount} from 'vue';
    import axios from 'axios';
    import AffichageFicheItem from './AffichageFicheItem.vue';

    const data = reactive({
        items: null
    }); 

    const API = "https://api.harvardartmuseums.org/";
    const TYPE = "object?";
    const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";

    onBeforeMount(() => {
        axios.get(API + TYPE + KEY)
            .then(response => {
                data.items = response.data;
                console.log(data.items);
            })
            .catch(error => {
                console.error("Erreur à la récupération : ", error);
            });
    });


</script>
<template>
  <div class="interface">
    <main>
      <AffichageFicheItem v-for="item in data.items" 
            :key="item.id"
            :itemInfo="item"
        />
    </main>
  </div>
</template>

<style></style>