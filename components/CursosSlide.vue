<template>
  <div>
    <Subtitulo>
      Cursos
    </Subtitulo>
    <div id="cursos" class="mt-[20px] relative container-swiper-slidder">
      <div v-if="!isReady" class="skeleton-container">
        <div v-for="i in 3" :key="i" class="skeleton-slide"></div>
      </div>
      <swiper
        v-else
        :modules="[Navigation, Pagination, Scrollbar]" 
        :slides-per-view="3"
        :loop="false"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        navigation
        :scrollbar="{ draggable: true }"
        :simulate-touch="true"
        :grab-cursor="true"
        :breakpoints="{
          0: { slidesPerView: 2 },       // Para pantallas pequeñas (móviles)
          768: { slidesPerView: 3 }      // Para pantallas grandes (tablets y desktop)
        }"
      >
        <swiper-slide class="slide-curso" v-for="curso in cursos" :key="curso.id">
          <a :href="curso.url_curso" class="relative h-auto" target="_blank">
            <img
              class="imagen-curso-slide"
              :src="curso.imagen_curso"
              :alt="'Imagen del curso ' + curso.id"
            />
            <div class="absolute bottom-0 left-0 w-full text-center p-2">
              <ButtonAncla :url="curso.url_curso">
                MÁS INFORMACIÓN
              </ButtonAncla>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar } from 'swiper';  // Importar los módulos necesarios
import 'swiper/swiper-bundle.css';  // Importar el CSS necesario
import axios from 'axios';
import { ref, onMounted } from 'vue';

const cursos = ref([]);
const isReady = ref(false);

onMounted(async () => {
  try {
    // Llama al proxy en Netlify para obtener los datos de la hoja de cursos
    const response = await axios.get('https://dapper-vacherin-b465fb.netlify.app/.netlify/functions/proxy-google-sheet?sheet=Cursos');
    cursos.value = response.data;
    console.log("Datos de cursos:", cursos.value);
    isReady.value = true;
  } catch (error) {
    console.error("Error fetching data for courses:", error);
  }
});
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
    width: 280px;
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

/* Estilos para el Skeleton Loader */
.skeleton-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.skeleton-slide {
  width: 220px;
  height: 300px;
  background-color: #e0e0e0;
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
