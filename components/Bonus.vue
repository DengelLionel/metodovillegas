<template>
  <div class="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-[60px] mb-[80px]">
    <!-- Encabezado del componente -->
    <p class="text-xl lg:text-2xl text-center mb-10 font-bold tracking-wide text-yellow-300">
      Al comprar <strong>"Merezco la Vida de Mis Sueños"</strong> hoy, recibirás <strong>estos bonos exclusivos</strong> para acelerar tu transformación:
    </p>
    
    <!-- Listado de Bonos en Tarjetas -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(bono, index) in bonos" :key="index" class="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-lg lg:text-xl font-semibold mb-3">{{ bono.titulo }}</h3>
        <p class="text-yellow-400 text-xl font-bold mb-2">{{ bono.precio }}</p>
        <p class="text-sm lg:text-base">{{ bono.descripcion }}</p>
      </div>
    </div>

    <!-- Valor Total y Precio Actual -->
    <div class="mt-10 text-center">
      <h2 class="text-2xl lg:text-3xl font-semibold mb-3">Valor Total: <span class="text-yellow-300">$110</span></h2>
      <h2 class="text-2xl lg:text-3xl font-semibold mb-3">Precio Actual: <span class="text-green-400">$14</span></h2>
    </div>
  </div>
</template>

<script setup>
const bonos = [
  {
    titulo: 'Guía de Manifestación de 21 días',
    precio: '$19',
    descripcion: 'Un plan diario para guiarte paso a paso.',
  },
  {
    titulo: 'Guía para Empoderar tu Potencial 360',
    precio: '$27',
    descripcion: 'Descubre cómo reprogramar tu mente y equiparla para el éxito.',
  },
  {
    titulo: 'Guía de Crecimiento Personal Paso a Paso',
    precio: '$21',
    descripcion: 'Cómo pasar del ser a la acción en tu vida diaria.',
  },
  {
    titulo: 'Guía sobre Creencias Limitantes',
    precio: '$18',
    descripcion: 'Elimina los pensamientos negativos que te frenan.',
  },
  {
    titulo: 'Ejercicios de Manifestación Prácticos',
    precio: '$25',
    descripcion: 'Herramientas prácticas que puedes aplicar de inmediato.',
  },
]
</script>

<style scoped>
/* Estilo opcional para animar las tarjetas */
.p-6:hover {
  transform: scale(1.05);
}
</style>
