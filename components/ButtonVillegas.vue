<template>
  <button
    :type="type"
    @click="handleClick"
    class="bg-transparent border-[1.5px] border-boton hover:bg-boton hover:text-primary text-white font-semibold py-3 px-8 transition-colors duration-300 ease-in-out"
  >
    <slot>Botón</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',  // Tipo de botón por defecto
  },
  url: {
    type: String,
    default: null,  // La URL es opcional
  },
});

// Función que maneja el clic y rastrea el evento con Facebook Pixel
const handleClick = () => {
  if (props.url) {
    // Rastrear el evento de inicio de pago en Facebook Pixel
    window.fbq('track', 'InitiateCheckout');  // Evento de "Iniciar Pago"
    
    // Redirigir a la URL en una nueva pestaña
    window.open(props.url, '_blank');
  }
};
</script>
