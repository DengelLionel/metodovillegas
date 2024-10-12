<template>
  <button
    :type="type"
    @click="handleClick"
    class="bg-boton border-[1.5px] rounded-full border-boton hover:bg-boton tracking-[0.09em] hover:text-primary text-primary font-semibold py-3 px-8 transition-transform duration-300 ease-in-out text-xl shadow-button animate-button"
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
<style scoped>
/* Añadir sombra blanca al botón */
.shadow-button {
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
}

.shadow-button:hover {
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.8);
}

/* Animación suave de escalado al hacer hover */
.animate-button {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.animate-button:hover {
  transform: scale(1.05); /* Escalado suave al pasar el mouse */
}
</style>