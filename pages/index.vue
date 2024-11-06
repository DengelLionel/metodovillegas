<template>
<Main>


  <div>
    <HeroBanner/>
    <!-- Puedes añadir más secciones aquí -->
  </div>
 <Statistic/> 
   <CursosSlide />
  <Testimonios/>
  <Conocenos/>
  <Wsp/>
  </Main>
</template>

<script setup>

import ButtonVillegas  from "~/components/ButtonVillegas.vue";
/* import Statistic from "~/components/Statistic.vue"; */
import Main from '~/components/Main.vue'
import Testimonios from '~/components/Testimonios.vue'
import CursosSlide from '~/components/CursosSlide.vue';
import Conocenos from '~/components/Conocenos.vue'
import HeroBanner from '~/components/HeroBanner.vue'
</script>

<style scoped>

</style>
