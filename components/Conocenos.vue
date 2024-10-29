<template>
  <section id="conocenos" class="text-gray-600 body-font bodytransparente py-12">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <!-- Skeleton Loader mientras los datos se están cargando -->
      <template v-if="!isReady">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-pulse">
          <div class="object-cover object-center rounded shadow-lg bg-gray-300 w-full h-64"></div>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
          <div class="h-8 bg-gray-300 w-1/2 mb-4 rounded"></div>
          <div class="h-4 bg-gray-300 w-3/4 mb-8 rounded"></div>
        </div>
      </template>
      <!-- Imagen de la sección "Conócenos" -->
      <div v-else class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded shadow-lg" alt="team" :src="conocenos.imagen">
      </div>
      <!-- Texto y detalles de la sección "Conócenos" -->
      <div v-if="isReady" class="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
        <h2 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-300">{{ conocenos.titulo }}</h2>
        <p class="mb-8 leading-relaxed text-lg text-gray-400">{{ conocenos.descripcion }}</p>
        <div class="flex justify-center">
         <!--  <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Saber Más</button> -->
         <!--  <a class="ml-4 inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600">
            <span>Descubre más</span>
            <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7m0 0l-7 7m7-7H6"></path>
            </svg>
          </a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const conocenos = ref({ imagen: '', titulo: '', descripcion: '' });
const isReady = ref(false);

onMounted(async () => {
  try {
    // Llama al proxy en Netlify para obtener los datos de la hoja de Conócenos
    const responseConocenos = await axios.get('https://proxyvillegas-dht37kq9l-dengellionels-projects.vercel.app/.netlify/functions/proxy-google-sheet?sheet=Conocenos');
    if (responseConocenos.data.length > 0) {
      const data = responseConocenos.data[0];
      conocenos.value = {
        imagen: data.imagen || '',
        titulo: data.titulo || '',
        descripcion: data.descripcion || ''
      };
    }
    isReady.value = true;
    console.log("Datos de Conócenos:", conocenos.value);
  } catch (error) {
    console.error("Error fetching data for Conocenos:", error);
  }
});
</script>

<style scoped>
.bodytransparente{
  background-color: rgba(10, 8, 1, 0.5);
}
/* Estilos adicionales para mejorar la presentación */
.title-font {
  font-family: 'Lato', sans-serif;
}

body-font {
  font-family: 'Lato', sans-serif;
}

/* Responsividad adicional para imágenes */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
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
