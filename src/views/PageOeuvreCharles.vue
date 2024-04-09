<script setup>
  import {computed, reactive, onBeforeMount} from 'vue';
  import axios from 'axios';
  import {useRoute} from 'vue-router';

  const apiKey = "1efb8d2e-f0fd-45d5-9cf2-a357c905cf75";


  const route = useRoute();

  const routeId = computed(() => route.params.id);

  const data = reactive({
    oeuvre : null,
    id: null,
  });

  onBeforeMount(() => {
    data.id = routeId;
    axios.get(`https://api.harvardartmuseums.org/object/${data.id}?apikey=${apiKey}`)
      .then(response =>{
        data.oeuvre = response.data;
        console.log(response.data);
      })

      .catch(error => {
        console.error(error);
      })
  });
  
</script>
<template>
  <div class="interface">
    <main>
      <div class="oeuvreDetail">
        <div class="oeuvreTitreDetail">
            <h2>{{ data.oeuvre.title}}</h2> 
        </div>
        <div class="oeuvreImgDetail">
            <img :src="data.oeuvre.images[0].baseimageurl" :alt="data.oeuvre.title">
        </div>
        
        <div class="oeuvreDesDetail">

          <p class="titreDesC">Description</p>
          <p class="desC"> {{ data.oeuvre.description }} </p>

          <p class="titreDesC">Date de creation</p>
          <p class="desC"> {{ data.oeuvre.dated }} </p>

          <p class="titreDesC">Origin</p>
          <p class="desC"> {{ data.oeuvre.culture }} </p>   

          <p class="titreDesC">Period</p>
          <p class="desC"> {{ data.oeuvre.period }} </p>    

        </div>
      </div>
      <div class="btnRtrn">
        <RouterLink to="/pageexpoeharles"> Retour </RouterLink>
      </div>
      <div class="backgroundLine"></div>
    </main>
  </div>
</template>

<style></style>
