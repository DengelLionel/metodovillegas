<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <!-- Skeleton Loader mientras los datos se están cargando -->
        <template v-if="!isReady">
          <div v-for="i in 3" :key="i" class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <div class="w-20 h-20 mb-8 bg-gray-300 rounded-full inline-block animate-pulse"></div>
              <p class="leading-relaxed text-gray-400 bg-gray-300 h-4 w-3/4 mx-auto animate-pulse"></p>
              <span class="inline-block h-1 w-10 rounded bg-gray-300 mt-6 mb-4 animate-pulse"></span>
              <h2 class="font-medium title-font tracking-wider text-sm text-gray-300 bg-gray-300 h-4 w-1/2 mx-auto animate-pulse"></h2>
              <p class="text-gray-500 bg-gray-300 h-3 w-1/3 mx-auto animate-pulse"></p>
            </div>
          </div>
        </template>
        <!-- Cargar testimonios dinámicamente -->
        <template v-else>
          <div v-for="testimonio in testimonios" :key="testimonio.id" class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                :alt="testimonio.nombre"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                :src="testimonio.imagen"
              >
              <p class="leading-relaxed text-gray-400">"{{ testimonio.texto }}"</p>
              <span class="inline-block h-1 w-10 rounded bg-boton mt-6 mb-4"></span>
              <h2 class="font-medium title-font tracking-wider text-sm text-gray-300">{{ testimonio.nombre }}</h2>
              <p class="text-gray-500">{{ testimonio.ocupacion }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const testimonios = ref([]);
const isReady = ref(false);

onMounted(async () => {
  try {
    // Llama al proxy en Netlify para obtener los datos de la hoja de testimonios
    const response = await axios.get('https://proxyvillegas-dht37kq9l-dengellionels-projects.vercel.app/.netlify/functions/proxy-google-sheet?sheet=Testimonios_pagina_inicio');
    testimonios.value = response.data;
    console.log("Datos de testimonios:", testimonios.value);
    isReady.value = true;
  } catch (error) {
    console.error("Error fetching data for testimonios:", error);
  }
});
</script>

<style scoped>
/* Estilos generales del componente */
.container {
  max-width: 1200px;
}

/* Estilos para el Skeleton Loader */
.animate-pulse {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
