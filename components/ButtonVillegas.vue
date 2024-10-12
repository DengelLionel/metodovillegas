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
// Definir las propiedades del componente
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

// Función que maneja el clic
const handleClick = () => {
  // Verificar si se está recibiendo la URL
  console.log('URL recibida:', props.url);

  if (props.url) {
    // Rastrear el evento de inicio de pago en Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout');  // Evento de "Iniciar Pago"
      console.log('Evento de Facebook Pixel disparado');
    } else {
      console.log('Facebook Pixel no está definido');
    }

    // Redirigir a la URL en una nueva pestaña
    window.open(props.url, '_blank');
  } else {
    console.log('No se proporcionó ninguna URL');
  }
};
</script>
