<template>

<!--     <HeroSection /> -->
    <section class="mt-10 px-4 md:px-16 ">
      <h1 class="text-center text-3xl leading-normal  lg:text-[3rem] mb-6 text-titulo tracking-[0.06em] lg:leading-[4rem]">Merezco la Vida de Mis Sueños: Descubre Cómo Manifestar Abundancia y Éxito en Sólo 21 Días</h1>
      <p class="text-lg lg:text-2xl text-center mb-10 text-white tracking-[0.06em]">
     Transforma tu vida en menos de un mes con técnicas universales probadas que te llevarán a vivir
una vida plena, llena de abundancia, amor y éxito sin esfuerzo.
      </p>
      
      <h2 class="text-titulo text-lg text-center lg:text-[2.2rem]">Que aprenderas:</h2>
      <div class="text-lg lg:text-xl text-center mb-10 text-white mt-10 tracking-[0.06em] flex flex-col gap-[15px]">
      <p> <strong>Identificar y eliminar las creencias limitantes</strong> que están saboteando tu éxito.</p>  
      <p> <strong>Utilizar técnicas poderosas de visualización diaria</strong> para manifestar tus deseos
más profundos.</p>
<p> <strong>Alinear tus emociones con tus metas,</strong> para que el universo trabaje a tu favor.</p>


      </div>
     <PuntoDolor/>
     <SuenaFamiliar/>
      <NuxtPage />
    </section>

</template>

<script setup>
// Importar los componentes que necesitas
/* import HeroSection from '~/components/HeroSection.vue' */
import PuntoDolor from '~/components/PuntoDolor.vue'
import SuenaFamiliar from '~/components/SuenaFamiliar.vue'
// Asignar el layout vacío para esta página
definePageMeta({
  layout: 'empty'
})
</script>
<style scoped>

</style>

