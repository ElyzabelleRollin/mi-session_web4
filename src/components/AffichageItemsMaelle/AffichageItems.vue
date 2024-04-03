<script setup>
    import {reactive, onBeforeMount} from 'vue';
    import axios from 'axios';
    import AffichageFicheItem from './AffichageFicheItem.vue';

    const data = reactive({
        tableauItems: [],
    }); 

    

    const API = "https://api.harvardartmuseums.org/";
    const TYPE02 = "object/";
    const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";
    const IDOEUVRES = [
        190205,
        206390,
        216044,
        230275,
        201419,
        292016,
        303648,
        205578,
        216900
    ];

    onBeforeMount(() => {
        for (let i = 0; i < 8; i++) {
            console.log("help me");
            axios.get(API + TYPE02 + IDOEUVRES[i] + "?" + KEY )
                .then(response => {
                    data.tableauItems.push(response.data); 
                })
                .catch(error => {
                    console.error("Erreur à la sélection : ", error);
                });
            }
            console.log(data.tableauItems); 
    });


</script>
<template>
  <div class="interface">
    <main>
        <div class="liste-items01">
            <!-- item 1 et 2 -->
            <AffichageFicheItem v-for="item in data.tableauItems" 
                    :key="item.id"
                    :itemInfo="item"
                />
        </div>
        <div class="liste-items02">
            <!-- item 3 a 5-->
            <AffichageFicheItem v-for="item in data.items" 
                    :key="item.id"
                    :itemInfo="item"
                />
        </div>
        <div class="liste-items03">
            <!-- item 6 a 9-->
            <AffichageFicheItem v-for="item in data.items" 
                    :key="item.id"
                    :itemInfo="item"
                />
        </div>
    </main>
  </div>
</template>

<style></style>