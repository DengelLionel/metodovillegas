<template>
  <swiper
    class="container-swiper-slidder"
    :slides-per-view="3"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
  >
    <swiper-slide class="slide-curso" v-for="i in 9" :key="i">
      <img
        class="imagen-curso-slide"
        src="/images/imagen1c.png"
        alt="Metodo villegas"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
</script>

<style scoped>
/* Estilos generales del contenedor */
.container-swiper-slidder {
  overflow: hidden;  /* Asegura que no haya contenido fuera del contenedor */
  width: 100%;  /* El contenedor del slider ocupa todo el ancho */
}

/* Ajustes para dispositivos pequeños */
@media (max-width: 768px) {
  .imagen-curso-slide {
    width: 220px;
    height: auto;
    object-fit: cover;  /* Mantiene las proporciones de la imagen */
  }
  .slide-curso {
    width: 220px !important;
    margin-right: 20px;  /* Ajusta el margen */
    display: flex;
    justify-content: center;
  }
}

/* Ajustes para pantallas grandes */
@media (min-width: 769px) {
  .slide-curso {
    width: 320px !important;
    margin-right: 30px;  /* Ajusta el margen */
    display: flex;
    justify-content: center;
  }
  .imagen-curso-slide {
    width: 320px;
    height: auto;
    object-fit: cover;  /* Mantiene las proporciones de la imagen */
  }
}
</style>
