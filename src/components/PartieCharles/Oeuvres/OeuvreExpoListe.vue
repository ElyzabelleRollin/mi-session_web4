<!--
Charles Corey
2160879
-->

<script setup>
  import OeuvreExpo from "@/components/PartieCharles/Oeuvres/OeuvreExpo.vue";
  import axios from "axios"
  import { ref, onBeforeMount} from "vue" 
  const oeuvresId = [ 303422 , 169024, 319281 , 202768, 319272 , 19278];
  const oeuvres = ref([]);
  const apiKey = "1efb8d2e-f0fd-45d5-9cf2-a357c905cf75";

  onBeforeMount(() => {
    for (let i = 0; i < oeuvresId.length; i++) {
      axios.get(`https://api.harvardartmuseums.org/object/${oeuvresId[i]}?apikey=${apiKey}`)

        .then(response =>{
          oeuvres.value.push(response.data);
          console.log(response.data);

        })

        .catch(error => {
            console.error(error);
        });
    }

  });
</script>

<template>
    <div class="expositionC">
        <OeuvreExpo v-for="oeuvre in oeuvres" :key="oeuvre.id" :item="oeuvre"/>
    </div>
</template>

<style>
</style>
