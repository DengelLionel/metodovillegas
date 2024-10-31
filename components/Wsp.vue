<template>
  <div v-if="!isReady" class="fixed bottom-4 right-4 z-50 w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
  <a
    v-else
    :href="whatsappdato.whatsapp" 
    target="_blank"
    class="fixed bottom-4 right-4 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition-transform duration-300"
  >
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3575 3.65052C19.0073 1.29767 15.882 0.00136426 12.5522 0C5.69119 0 0.107069 5.58367 0.104391 12.4468C0.103431 14.6407 0.676624 16.782 1.76597 18.6698L0 25.12L6.59873 23.3891C8.41684 24.3808 10.4639 24.9034 12.5472 24.9042H12.5523C12.5519 24.9042 12.5527 24.9042 12.5523 24.9042C19.4125 24.9042 24.9972 19.32 25 12.4567C25.0012 9.13066 23.7077 6.00327 21.3575 3.65052ZM12.5522 22.802H12.548C10.6916 22.8013 8.87073 22.3025 7.28223 21.3598L6.90448 21.1356L2.98869 22.1628L4.03392 18.345L3.78789 17.9534C2.75227 16.3062 2.2053 14.4024 2.20611 12.4475C2.20833 6.74314 6.84966 2.10233 12.5564 2.10233C15.3198 2.10319 17.9175 3.1808 19.8709 5.13639C21.8242 7.09198 22.8994 9.69142 22.8983 12.4559C22.8959 18.1606 18.2547 22.802 12.5522 22.802Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2276 15.0535C17.9165 14.8978 16.3873 14.1455 16.1023 14.0416C15.8171 13.9378 15.6098 13.8859 15.4025 14.1972C15.1952 14.5085 14.5991 15.2092 14.4177 15.4168C14.2363 15.6243 14.0548 15.6503 13.7438 15.4946C13.4328 15.3389 12.4306 15.0105 11.2427 13.9509C10.318 13.1261 9.69382 12.1077 9.51234 11.7962C9.33093 11.4849 9.49302 11.3166 9.64876 11.1615C9.78866 11.0221 9.9598 10.7982 10.1153 10.6166C10.2708 10.435 10.3226 10.3052 10.4263 10.0977C10.53 9.89012 10.4782 9.70847 10.4004 9.55284C10.3226 9.39717 9.70065 7.86626 9.44149 7.24341C9.18895 6.63701 8.93257 6.71917 8.74162 6.70951C8.56048 6.70048 8.35285 6.69861 8.14554 6.69861C7.93823 6.69861 7.6012 6.77647 7.31616 7.08778C7.03109 7.39919 6.22754 8.1517 6.22754 9.68245C6.22754 11.2134 7.34204 12.6924 7.49757 12.8999C7.65304 13.1076 9.69074 16.2491 12.8108 17.5962C13.5528 17.9167 14.1322 18.1081 14.5839 18.2514C15.3289 18.4881 16.007 18.4547 16.5429 18.3747C17.1404 18.2853 18.3831 17.6222 18.6421 16.8958C18.9014 16.1692 18.9014 15.5464 18.8236 15.4167C18.7459 15.287 18.5386 15.2092 18.2276 15.0535Z" fill="white"/>
    </svg>
  </a>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const whatsappdato = ref({ whatsapp: '' });
const isReady = ref(false);

onMounted(async () => {
  try {
    // Llama al proxy en Netlify para obtener los datos de la hoja de Conócenos
    const responsewhatsapp = await axios.get('https://dapper-vacherin-b465fb.netlify.app/.netlify/functions/proxy-google-sheet?sheet=redes_sociales');
    if (responsewhatsapp.data.length > 0) {
      const data = responsewhatsapp.data[0];
      whatsappdato.value = {
        whatsapp: data.whatsapp || '',
      };
    }
    isReady.value = true;

  } catch (error) {
    console.error("Error fetching data for whatsapp:", error);
  }
});
</script>

<style scoped>
/* Añade aquí cualquier animación personalizada si quieres */
</style>
