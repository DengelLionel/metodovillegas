<template>
  <div class="fondotelomereces">
   <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style scoped>
.fondotelomereces {
  background-image: url('/images/fondometod.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; /* Asegurar que no haya desbordamiento */
  position: relative; /* Posición relativa para usar el pseudo-elemento */
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
    padding-bottom: 40px;
  }
}
@media (min-width: 1001px) and (max-width: 1500px){
  .fondotelomereces{
    padding-right: 60px;
    padding-left: 60px;
     padding-bottom: 60px;
  }
}
@media (min-width: 1501px){
  .fondotelomereces{
    padding-top: 40px;
    padding-right: 90px;
    padding-left: 90px;
    padding-bottom: 90px;

  }
}
</style>
