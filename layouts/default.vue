<template>
  <div class="fondodefault">
    <Header />  <!-- Encabezado global -->
    <NuxtPage />    <!-- Aquí se renderizan las páginas -->
    <Footer />  <!-- Pie de página global -->
  </div>
</template>

<script setup>
// Importar los componentes globales que se repiten en todas las páginas
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
/* Estilos globales específicos del layout */
.fondodefault{
  overflow-x: hidden;
}
</style>
