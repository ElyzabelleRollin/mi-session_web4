<script setup>
    import {reactive, onMounted } from 'vue';
    import { RouterLink } from 'vue-router';

  const data = reactive({
      itemImg : ''
  });

  const props = defineProps({
      itemInfo : {
          type: Object, 
          required: true
      }
  });

  onMounted(() => {
      console.log(props.itemInfo)

      if(props.itemInfo.nbPhotos === 0){
          data.itemImg = '/src/assets/img/pasdimage.jpg'
          console.log("pas d'image!!!!!!!!!")
      }else{
          data.itemImg = props.itemInfo.image.url;
      }
  });
</script>

<template>
    <div class="fiche-produits">
        <div class="img">
            <img :src="data.itemImg" :alt="props.itemInfo.titre">
        </div>
        <div class="info">
            <p class="item" v-text="props.itemInfo.titre"></p>
            <RouterLink :to="{name: 'pageobjetmaelle', params: {id: props.itemInfo.id}}">En savoir plus &gt;</RouterLink>
        </div>
    </div>
</template>

<style></style>