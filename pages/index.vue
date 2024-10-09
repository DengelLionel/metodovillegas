<template>
<Main>


  <div>
    <section class=" bg-main text-white py-20 pl-20 pr-20 text-center">
      <h1 class="text-5xl font-bold mb-4 text-titulo">Bienvenido a Métodos Villegas</h1>
      <p class="text-lg mb-6">Tenemos muchos cursos para ti y para toda tu familia</p>
     <ButtonVillegas type="button">
        Aprende más
      </ButtonVillegas> 
    </section>
    <!-- Puedes añadir más secciones aquí -->
  </div>
  <Statistic/>
   <CursosSlide />
  <Testimonios/>
  <Conocenos/>
  </Main>
</template>

<script setup>

import ButtonVillegas  from "~/components/ButtonVillegas.vue";
import Statistic from "~/components/Statistic.vue";
import Main from '~/components/Main.vue'
import Testimonios from '~/components/Testimonios.vue'
import CursosSlide from '~/components/CursosSlide.vue';
import Conocenos from '~/components/Conocenos.vue'
</script>

<style scoped>

</style>
