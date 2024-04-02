<script setup>
    import {reactive, onBeforeMount} from 'vue';
    import axios from 'axios';
    import AffichageFicheItem from './AffichageFicheItem.vue';

    const data = reactive({
        tableauItems: null,
        testItems: null
    }); 

    

    const API = "https://api.harvardartmuseums.org/";
    const TYPE = "object?";
    const TYPE02 = "object/";
    const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";
    const IDOEUVRES = {
        "id01": "190205",
        "id02": "206390",
        "id03": "216044",
        "id04": "230275",
        "id05": "201419",
        "id06": "292016",
        "id07": "303648",
        "id08": "205578",
        "id09": "216900"
    };

    onBeforeMount(() => {
        // for (let i = 0; i < 8; i++) {
        //     console.log("help me");
        //     axios.get(API + TYPE02 + IDOEUVRES[i] + "?" + KEY )
        //         .then(response => {
        //             data.tableauItems += response.data;
        //         })
        //         .catch(error => {
        //             console.error("Erreur à la sélection : ", error);
        //         });
        //         console.log(data.tableauItems); 
        // }
        axios.get(API + TYPE + KEY )
            .then(response => {
                data.items = response.data.records;
                // data.testitems = response.data.records[5].classificationid;
                // console.log(data.testitems);
                // console.log(data.items);
            })
            .catch(error => {
                console.error("Erreur à la récupération : ", error);
            });
            axios.get(API + TYPE02 + IDOEUVRES["id01"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id02"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id03"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id04"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id05"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id06"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id07"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id08"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
            axios.get(API + TYPE02 + IDOEUVRES["id09"] + "?" + KEY )
            .then(response => {
                data.testItems = response.data;
                console.log(data.testItems);
            })
    });


</script>
<template>
  <div class="interface">
    <main>
        <div class="liste-items01">
            <!-- item 1 et 2 -->
            <AffichageFicheItem v-for="item in data.items" 
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