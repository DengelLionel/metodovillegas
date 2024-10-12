<template>
    <div class="mb-[80px] mt-[80px]">
        <Subtitulo>
            MIRA LO QUE DICEN LAS PERSONAS QUE HAN
CREIDO EN ELLAS AQUÍ
        </Subtitulo>

<div>
   <div class="testimonials-carousel">
    <Splide :options="splideOptions" class="w-full">
      <SplideSlide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Testimonio" class="rounded-lg object-cover w-full h-auto" />
      </SplideSlide>
    </Splide>
  </div>
</div>
    </div>
</template>
<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

// Lista de imágenes
const images = [
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696844/landingvillegas/WhatsApp_Image_2024-10-11_at_8.02.33_PM_3_tulmkv.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696844/landingvillegas/WhatsApp_Image_2024-10-11_at_8.02.33_PM_4_yhxdia.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696844/landingvillegas/WhatsApp_Image_2024-10-11_at_8.02.33_PM_2_wdbe3e.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696841/landingvillegas/WhatsApp_Image_2024-10-11_at_8.02.33_PM_5_zrhkz0.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696841/landingvillegas/WhatsApp_Image_2024-10-11_at_8.02.33_PM_6_gden5a.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696840/landingvillegas/WhatsApp_Image_2024-10-11_at_8.05.03_PM_2_mfpv22.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696840/landingvillegas/WhatsApp_Image_2024-10-11_at_8.05.03_PM_1_zenmaa.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696840/landingvillegas/WhatsApp_Image_2024-10-11_at_8.05.03_PM_yscwqz.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696840/landingvillegas/WhatsApp_Image_2024-10-11_at_8.05.04_PM_1_qrifw9.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696840/landingvillegas/WhatsApp_Image_2024-10-11_at_8.05.04_PM_g1p8j3.jpg',
  'https://res.cloudinary.com/dh9etf988/image/upload/v1728696840/landingvillegas/WhatsApp_Image_2024-10-11_at_8.02.33_PM_jtfwkn.jpg'
]

// Configuraciones de Splide
const splideOptions = {
  type       : 'loop',
  perPage    : 3,
  gap        : '1rem',
  breakpoints: {
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
    },
  },
  autoplay   : true,
  interval   : 3000,
  pauseOnHover: true,
  arrows     : true,
  pagination : true,
  drag       : 'free',
}
</script>

<style scoped>
.testimonials-carousel {
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
</style>