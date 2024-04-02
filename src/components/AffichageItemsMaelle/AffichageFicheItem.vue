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

      if(props.itemInfo.images.length === 0){
            data.itemImg = '/src/assets/img/pasdimage.jpg'
            console.log("pas d'image!!!!!!!!!")
      }else{
            console.log("image ok");
            data.itemImg = props.itemInfo.images[0].baseimageurl;
      }
  });
</script>

<template>
    <div class="fiche-produits">
        <div class="img">
            <img :src="data.itemImg" :alt="props.itemInfo.title">
        </div>
        <div class="info">
            <p class="item" v-text="props.itemInfo.title"></p>
            <RouterLink :to="{name: 'pageobjetmaelle', params: {id: props.itemInfo.id}}">En savoir plus &gt;</RouterLink>
        </div>
    </div>
</template>

<style></style>