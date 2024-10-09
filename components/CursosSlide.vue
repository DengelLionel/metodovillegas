<template>
  <div class="relative container-swiper-slidder">

    <!-- Swiper Slider -->
    <swiper
      :modules="[Navigation, Pagination, Scrollbar]" 
      :slides-per-view="3"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      navigation
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide class="slide-curso" v-for="i in 9" :key="i">
        <img
          class="imagen-curso-slide"
          src="/images/imagen1c.png"
          alt="Metodo villegas"
        />
      </swiper-slide>
 <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar } from 'swiper';  // Importar los módulos necesarios
import 'swiper/swiper-bundle.css';  // Importar el CSS necesario
</script>

<style scoped>
/* Estilos generales del contenedor */
.container-swiper-slidder {
  overflow: hidden;
  width: 100%;
  position: relative; /* Para que las flechas estén posicionadas dentro del contenedor */
}

/* Estilos de las flechas */
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
  color: white !important;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

/* Ajustes para dispositivos pequeños */
@media (max-width: 768px) {
  .imagen-curso-slide {
    width: 220px;
    height: auto;
    object-fit: cover;
  }
  .slide-curso {
    width: 220px !important;
    margin-right: 20px;
    display: flex;
    justify-content: center;
  }
}

/* Ajustes para pantallas grandes */
@media (min-width: 769px) {
  .slide-curso {
    width: 320px !important;
    margin-right: 30px;
    display: flex;
    justify-content: center;
  }
  .imagen-curso-slide {
    width: 320px;
    height: auto;
    object-fit: cover;
  }
}
</style>
