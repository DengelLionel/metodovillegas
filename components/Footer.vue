<template>
<footer class="text-gray-400 bg-primary body-font relative w-full bottom-0">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-center flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img class="w-[80px] h-auto object-cover" src="@/assets/images/logometodovillegas.webp" alt="Metodo villegas" />
        <span class="ml-3 text-xl">Método Villegas</span>
      </a>
     
    </div>
    <div class="flex-grow flex flex-wrap justify-center  -mb-10 md:text-left text-center order-first">
      <div class="w-full px-4 lg:justify-center lg:align-center">
        <nav class="list-none mb-10 flex flex-col gap-[15px] lg:flex-row lg:gap-[20px] lg:justify-center lg:align-center">
          <li>
            <a href="/" class="text-gray-400 hover:text-white cursor-pointer">INICIO</a>
          </li>
          <li>
            <a  @click.prevent="scrollToSection('cursos')" href="#" class="text-gray-400 hover:text-white cursor-pointer">CURSOS</a>
          </li>
   
          <li>
            <a  @click.prevent="scrollToSection('conocenos')" href="#" class="text-gray-400 hover:text-white cursor-pointer">CONOCENOS</a>
          </li>
        </nav>
      </div>
    
    
    </div>
  </div>
  <div class="bg-secundary bg-opacity-75">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-400 text-sm text-center sm:text-left">© {{ currentYear }}
      
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</template>
<script setup>
const currentYear = new Date().getFullYear();
import { useScrollToSection } from '~/composables/useScrollToSection';

// Usar el composable para manejar el desplazamiento
const { scrollToSection } = useScrollToSection();
</script>