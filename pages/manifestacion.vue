<template>
  <section class="mt-10 md:px-16">
    <h1 class="text-center text-3xl leading-normal lg:text-[2.5rem] mb-6 text-titulo tracking-[0.06em] lg:leading-[4rem]">
      {{ manifestacion.titulo }}
    </h1>
    <p class="text-lg lg:text-2xl text-center mb-10 text-white tracking-[0.06em]">
      Transforma tu vida en menos de un mes con técnicas universales probadas que te llevarán a vivir
      una vida plena, llena de abundancia, amor y éxito sin esfuerzo.
    </p>
    <div class="flex flex-row justify-center align-center mb-[20px]">
      <img src="/images/ventana2.webp" class="w-[70%] md:w-[30%]" alt="Transforma tu vida">
    </div>

    <Subtitulo>Que aprenderás:</Subtitulo>
    <div class="text-lg lg:text-xl text-center mb-10 text-white mt-10 tracking-[0.06em] flex flex-col gap-[15px]">
      <p><strong>Identificar y eliminar las creencias limitantes</strong> que están saboteando tu éxito.</p>
      <p><strong>Utilizar técnicas poderosas de visualización diaria</strong> para manifestar tus deseos más profundos.</p>
      <p><strong>Alinear tus emociones con tus metas,</strong> para que el universo trabaje a tu favor.</p>
    </div>

    <PuntoDolor />
    <SuenaFamiliar />
    <TestimoniosLanding />
    <Libro />
    <Video/>
    <Regalos />
    <Bonus />
    <TextosLibro />
    <Faqs />
    <PieLanding />
    <Wsp/>
    <NuxtPage />
  </section>
</template>

<script setup>
import PuntoDolor from '~/components/PuntoDolor.vue'
import SuenaFamiliar from '~/components/SuenaFamiliar.vue'
import TestimoniosLanding from '~/components/TestimoniosLanding.vue'
import Libro from '~/components/Libro.vue'
import Faqs from '~/components/Faqs.vue'
import TextosLibro from '~/components/TextosLibro.vue'
import Bonus from '~/components/Bonus.vue'
import Regalos from '~/components/Regalos.vue'
import PieLanding from '~/components/PieLanding.vue'
import Video from '~/components/Video.vue'

import axios from 'axios';
import { ref, onMounted } from 'vue';
const manifestacion = ref({ titulo: '' });
const isReady = ref(false);

onMounted(async () => {
  try {
    // Llama al proxy en Netlify para obtener los datos de la hoja de Conócenos
    const responsemanifes = await axios.get('https://dapper-vacherin-b465fb.netlify.app/.netlify/functions/proxy-google-sheet?sheet=manifestacion');
    if (responsemanifes.data.length > 0) {
      const data = responsemanifes.data[0];
      manifestacion.value = {
        titulo: data.titulo || '',
      };
    }
    isReady.value = true;

  } catch (error) {
    console.error("Error fetching data for whatsapp:", error);
  }
});

definePageMeta({
  layout: 'empty',
  head() {
    return {
      title: 'Merezco la Vida de Mis Sueños - Manifestación y Éxito en Solo 21 Días',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Transforma tu vida en menos de un mes con técnicas universales que te llevarán a vivir una vida plena, llena de abundancia, amor y éxito sin esfuerzo.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'manifestación, abundancia, éxito, ley de atracción, transformación personal, creencias limitantes, visualización'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Merezco la Vida de Mis Sueños - Manifestación y Éxito en Solo 21 Días'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Aprende cómo eliminar bloqueos mentales, atraer abundancia y vivir con éxito en solo 21 días con técnicas probadas de manifestación.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://metodovillegas.com/images/ventana3.webp'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://metodovillegas.com/manifestacion'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ],
      link: [
        { rel: 'me', href: 'https://www.instagram.com/equipartumente' },
        { rel: 'me', href: 'https://www.tiktok.com/@equipartumente360?_t=8qT8zr63Kqs&_r=1' }
      ]
    }
  }
})
</script>

<style scoped>
/* Estilos personalizados aquí */
</style>
