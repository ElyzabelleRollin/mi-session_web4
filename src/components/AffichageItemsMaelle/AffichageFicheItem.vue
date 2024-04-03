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

      if(props.itemInfo.images.length === 0){
            data.itemImg = '/src/assets/img/pasdimage.jpg'
      }else{
            data.itemImg = props.itemInfo.images[0].baseimageurl;
      }
  });
</script>

<template>
    <div class="interface">
        <div class="fiche-items-maelle">
            <div class="img-maelle">
                <img :src="data.itemImg" :alt="props.itemInfo.title">
            </div>
            <div class="info-maelle">
                <p class="item-maelle" v-text="props.itemInfo.title"></p>
                <RouterLink :to="{name: 'pageobjetmaelle', params: {id: props.itemInfo.id}}" class="link">En savoir plus &gt;</RouterLink>
            </div>
        </div>
    </div>
</template>

<style></style>