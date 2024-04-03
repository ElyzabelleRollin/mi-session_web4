<script setup>
  import axios from "axios"
  import {ref, onBeforeMount} from "view"
  import OeuvrePage from "@/components/PartieCharles/Oeuvres/OeuvrePage.vue";

  const oeuvresId = [202537, 188168, 315544, 315498, 315532, 19278];
  const oeuvres = ref([]);

  onBeforeMount(() => {
    for (let i = 0; i < oeuvresId.length; i++) {
      axios.get('https://github.com/harvardartmuseums/api-docs' + oeuvresId[i] + "?apykey=1efb8d2e-f0fd-45d5-9cf2-a357c905cf75")

        /*.then(response =>{
          push

        })*/
    }

  });

  
</script>
<template>
  <div class="interface">
    <main>
        <OeuvrePage v-for="oeuvre in oeuvres" :key="oeuvre.id" :item="oeuvre"/>
    </main>
  </div>
</template>

<style></style>
