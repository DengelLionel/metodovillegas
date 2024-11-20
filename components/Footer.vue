<template>
<footer class="text-gray-400 bg-primary body-font relative w-full bottom-0">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-center flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img class="w-[80px] h-auto object-cover" src="@/assets/images/logovillegasnuevo.png" alt="Metodo villegas" />
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
      <span class="inline-flex sm:ml-auto sm:mt-0 sm:mr-[80px] md:mr-[100px] mt-2 justify-center sm:justify-start">
        <a :href="red.facebook" class="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
      
        <a :href="red.instagram" class="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
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
import axios from 'axios';
import { ref, onMounted } from 'vue';
// Usar el composable para manejar el desplazamiento
const { scrollToSection } = useScrollToSection();


const red = ref({ facebook: '',instagram:"" });
const isReady = ref(false);

onMounted(async () => {
  try {
    // Llama al proxy en Netlify para obtener los datos de la hoja de Conócenos
    const responsered = await axios.get('https://dapper-vacherin-b465fb.netlify.app/.netlify/functions/proxy-google-sheet?sheet=redsocial');

    if (responsered.data.length > 0) {
      const data = responsered.data[0];
      red.value = {
       facebook: data.facebook || '',
        instagram: data.instagram || ''
      };
    }
    isReady.value = true;

  } catch (error) {
    console.error("Error fetching data for whatsapp:", error);
  }
});
</script>