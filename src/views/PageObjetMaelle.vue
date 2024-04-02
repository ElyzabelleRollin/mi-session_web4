<script setup>
  import { reactive, onBeforeMount, computed } from 'vue';
  import axios from 'axios'; 
  import {useRoute} from 'vue-router';
  import { RouterLink } from 'vue-router';

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
        console.log(data.id);
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
      <div class="img-maelle">
        <img :src="data.itemImg" :alt="data.detailItem.title">
      </div>
      <div class="info-maelle">
        <p class="item-maelle" v-text="data.detailItem.title"></p>
        <RouterLink :to="{name: 'pageaccueilmaelle'}">Retourner &gt;</RouterLink>
      </div>
    </main>
  </div>
</template>

<style></style>
