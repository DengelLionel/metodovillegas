<template>
  <div class="text-gray-400 bg-primary body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
     <img class="w-[80px] h-auto object-cover" src="@/assets/images/logometodovillegas.webp" alt="Metodo villegas" />
      <span class="ml-3 text-xl">Método Villegas</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" class="mr-5 hover:text-white cursor-pointer">INICIO</a>
       <a  @click.prevent="scrollToSection('conocenos')" href="#" class="mr-5 hover:text-white cursor-pointer">CONÓCENOS</a>
      <a  @click.prevent="scrollToSection('cursos')" href="#" class="mr-5 hover:text-white cursor-pointer">CURSOS</a>

   
    </nav>
  <!--   <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> -->
  </div>
</div>
</template>
<script setup>
import { useScrollToSection } from '~/composables/useScrollToSection';

// Usar el composable para manejar el desplazamiento
const { scrollToSection } = useScrollToSection();
</script>
