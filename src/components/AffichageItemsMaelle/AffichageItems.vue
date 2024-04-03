<script setup>
    import {reactive, onBeforeMount} from 'vue';
    import axios from 'axios';
    import AffichageFicheItem from './AffichageFicheItem.vue';

    const data = reactive({
        tableauItems01: [],
        tableauItems02: [],
        tableauItems03: [],
    }); 

    

    const API = "https://api.harvardartmuseums.org/";
    const TYPE = "object/";
    const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";
    const IDOEUVRES01 = [
        190205,
        206390,
    ];
    const IDOEUVRES02 = [
        216044,
        230275,
        201419,
    ];
    const IDOEUVRES03 = [
        292016,
        303648,
        205578,
        216900
    ]

    onBeforeMount(() => {
        for (let i = 0; i < IDOEUVRES01.length; i++) {
            axios.get(API + TYPE + IDOEUVRES01[i] + "?" + KEY )
                .then(response => {
                    data.tableauItems01.push(response.data); 
                })
                .catch(error => {
                    console.error("Erreur à la sélection : ", error);
                });
            }
        for (let i = 0; i < IDOEUVRES02.length; i++) {
            axios.get(API + TYPE + IDOEUVRES02[i] + "?" + KEY )
                .then(response => {
                    data.tableauItems02.push(response.data); 
                })
                .catch(error => {
                    console.error("Erreur à la sélection : ", error);
                });
            }
        for (let i = 0; i < IDOEUVRES03.length; i++) {
            axios.get(API + TYPE + IDOEUVRES03[i] + "?" + KEY )
                .then(response => {
                    data.tableauItems03.push(response.data); 
                })
                .catch(error => {
                    console.error("Erreur à la sélection : ", error);
                });
            }
            console.log(data.tableauItems01); 
            console.log(data.tableauItems02); 
            console.log(data.tableauItems03); 
    });


</script>
<template>
  <div class="interface-maelle">
    <main>
        <!-- <div class="annee">
            <p>1</p>
            <p>3</p>
            <p>0</p>
            <p>0</p>
            <p>1600</p>
        </div> -->
        <div class="liste-items01">
            <!-- item 1 et 2 -->
            <AffichageFicheItem v-for="item in data.tableauItems01" 
                    :key="item.id"
                    :itemInfo="item"
                    class="item01"
                />
        </div>
        <div class="liste-items02">
            <!-- item 3 , 4 , 5-->
            <AffichageFicheItem v-for="item in data.tableauItems02" 
                    :key="item.id"
                    :itemInfo="item"
                    class="item02"
                />
        </div>
        <div class="liste-items03">
            <!-- item 6 , 7 , 8 , 9 -->
            <AffichageFicheItem v-for="item in data.tableauItems03" 
                    :key="item.id"
                    :itemInfo="item"
                    class="item03"
                />
        </div>
    </main>
  </div>
</template>

<style></style>