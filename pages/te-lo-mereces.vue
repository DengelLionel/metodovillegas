<template>
  <div>
<!--     <HeroSection /> -->
    <section class="mt-10 px-4 md:px-16">
      <h2 class="text-center text-4xl font-bold mb-6">Te lo mereces</h2>
      <p class="text-lg text-center mb-10">
        Descubre por qué te mereces este producto o servicio. Aquí puedes colocar información importante sobre tu oferta.
      </p>
      
      <CallToAction />
      <NuxtPage />
    </section>
  </div>
</template>

<script setup>
// Importar los componentes que necesitas
/* import HeroSection from '~/components/HeroSection.vue' */
import CallToAction from '~/components/CallToAction.vue'

// Asignar el layout vacío para esta página
definePageMeta({
  layout: 'empty'
})
</script>
