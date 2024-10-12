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
  padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
  height: 0;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
