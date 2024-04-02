<script setup>
    import {reactive, onBeforeMount} from 'vue';
    import axios from 'axios';
    import AffichageFicheItem from './AffichageFicheItem.vue';

    const data = reactive({
        items: null,
        testItems: null
    }); 

    

    const API = "https://api.harvardartmuseums.org/";
    const TYPE = "object?";
    const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";
    // const CLASSIFICATION = "Weapons and Ammunition";

    onBeforeMount(() => {
        axios.get(API + TYPE + KEY )
            .then(response => {
                data.items = response.data.records;
                data.testitems = response.data.records[5].classificationid;
                console.log(data.testitems);
                // console.log(data.items);
            })
            .catch(error => {
                console.error("Erreur à la récupération : ", error);
            });
    });


</script>
<template>
  <div class="interface">
    <main>
        <div>
            <h2>Arsenal du temps</h2>
        </div>
        <div class="ligne-temps">
            
        </div>
        <div class="liste-items">
            <AffichageFicheItem v-for="item in data.items" 
                    :key="item.id"
                    :itemInfo="item"
                />
        </div>
    </main>
  </div>
</template>

<style></style>