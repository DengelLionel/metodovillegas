<template>
  <section class="mt-10 md:px-16">
    <h1 class="text-center text-3xl leading-normal lg:text-[2.5rem] mb-6 text-titulo tracking-[0.06em] lg:leading-[4rem]">
      Merezco la Vida de Mis Sueños: Descubre Cómo Manifestar Abundancia y Éxito en Sólo 21 Días
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
          content: '/images/ventana3.webp' // Cambia a la URL de tu imagen
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
        { rel: 'me', href: 'https://www.instagram.com/equipartumente' }, // Perfil de Instagram
        { rel: 'me', href: 'https://www.tiktok.com/@equipartumente360?_t=8qT8zr63Kqs&_r=1' }    // Perfil de TikTok
      ],
      script: [
        {
          hid: 'facebook-pixel',
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1298547537801212'); 
            fbq('track', 'PageView');
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
})
</script>

<style scoped>
/* Estilos personalizados aquí */
</style>
