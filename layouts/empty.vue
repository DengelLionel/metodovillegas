<template>
  <div class="fondotelomereces">
   <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style scoped>
.fondotelomereces {
  background-image: url('/images/fondometodo.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
   min-height: 100vh;
  overflow-x: hidden; /* Asegurar que no haya desbordamiento */
  position: relative; /* Posición relativa para usar el pseudo-elemento */
}

.fondotelomereces::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
    overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo negro semitransparente */
  z-index: 0; /* Poner detrás del contenido principal */
}
.fondotelomereces > * {
  position: relative;
    overflow-x: hidden;
   z-index: 1; 
}

@media (min-width: 240px) and (max-width: 768px) {
  .fondotelomereces{
    padding: 20px;
  }
}
@media (min-width: 769px) and (max-width: 1000px){
.fondotelomereces{
    padding-right: 40px;
    padding-left: 40px;
  }
}
@media (min-width: 1001px) and (max-width: 1500px){
  .fondotelomereces{
    padding-right: 60px;
    padding-left: 60px;
  }
}
@media (min-width: 1501px){
  .fondotelomereces{
    padding-top: 40px;
    padding-right: 90px;
    padding-left: 90px;
    padding-bottom: 40px;
  }
}
</style>
