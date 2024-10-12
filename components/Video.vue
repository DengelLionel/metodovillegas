<template>
  <div class="video-container">
    <video
      class="w-full h-full"
      controls
      autoplay
      loop
      muted
    >
      <source src="https://res.cloudinary.com/dh9etf988/video/upload/v1728696154/landingvillegas/curso_por_dentro_kdd7zm.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  </div>
</template>

<script setup>
// No necesitas lógica adicional para este componente.
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
 
  height: auto;
  margin: 20px 0;
}

/* En pantallas grandes, aplica position absolute */
@media (min-width: 1024px) {
    .video-container{
         padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
    }
  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

/* En pantallas pequeñas, como móviles y tablets */
@media (max-width: 1023px) {

  
  .video-container video {
    position: static; /* Elimina absolute para móviles */
    width: 100%;
    height: auto;
  }
}
</style>
