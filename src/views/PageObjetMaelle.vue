<script setup>
  import { reactive, onBeforeMount, computed } from 'vue';
  import {useRoute} from 'vue-router';
  import { RouterLink } from 'vue-router';
  import axios from 'axios'; 

    const route = useRoute();
    const routeId = computed(() => route.params.id)
    const API = "https://api.harvardartmuseums.org/";
    const TYPE = "object/";
    const KEY = "apikey=922bf3e7-f260-401e-b599-8e16cf6325f4";
    
    const data = reactive({
        detailItem : null, 
        itemImg : null, 
        id : null
    });

    onBeforeMount(() => {
        data.id = routeId;
        // console.log(data.id);
        
        axios.get(API + TYPE + data.id + '?' + KEY )
            .then(response => {
                data.detailItem = response.data;
                 console.log(data.detailItem);

                if(data.detailItem.images.length === 0){
                    data.itemImg = '/src/assets/img/pasdimage.jpg'
                }else{
                    data.itemImg = data.detailItem.images[0].baseimageurl;
                }
            })
            .catch(error => {
                console.error("Erreur à la sélection : ", error);
            });
    });
</script>
<template>
  <div class="interface">
    <main>
      <h2>Arsenal du temps</h2>

      <p class="nom-oeuvre-maelle" v-text="data.detailItem.title"></p>

      <div class="info-type-maelle">
        <p class="type-oeuvre" v-text="data.detailItem.worktypes[0].worktype"></p>
      </div>

      <div class="info-annee-maelle">
        <p class="annee-oeuvre" v-text="data.detailItem.dated"></p>
      </div>

      <div class="info-periode-maelle">
        <p class="periode-oeuvre" v-text="data.detailItem.period"></p>
      </div>

      <div class="img-detail-maelle">
        <img :src="data.itemImg" :alt="data.detailItem.title">
      </div>

      <div class="info-dimension-maelle">
        <p class="dimension-oeuvre" v-text="data.detailItem.dimensions"></p>
      </div>

      <div class="info-description-maelle">
        <p class="description-oeuvre" v-text="data.detailItem.description"></p>
      </div>

      <div class="info-permission-maelle">
        <p class="permission-oeuvre" v-text="data.detailItem.permission"></p>
      </div>

        <RouterLink :to="{name: 'pageaccueilmaelle'}">Retourner &gt;</RouterLink>
    </main>
  </div>
</template>

<style></style>
