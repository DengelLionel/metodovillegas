<template>
  <button
    :type="type"
    @click="handleClick"
    class="bg-boton border-[1.5px] rounded-full border-boton tracking-[0.09em] hover:text-primary text-primary font-semibold py-3 px-8 transition-transform duration-300 ease-in-out text-xl shadow-button animate-button glowing-button"
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
  if (props.url) {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout');  // Evento de "Iniciar Pago"
    }
    window.open(props.url, '_blank');
  }
};
</script>

<style scoped>
/* Sombra inicial con un toque dorado */
.shadow-button {
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.6); /* Luz dorada */
  text-transform: uppercase;
}

.shadow-button:hover {
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.8); /* Luz dorada más intensa */
}

/* Animación suave de escalado al hacer hover */
.animate-button {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.animate-button:hover {
  transform: scale(1.05); /* Escalado suave al pasar el mouse */
}

/* Añadir el efecto de brillo animado */
.glowing-button {
  background: linear-gradient(45deg, #f9d423, #ff4e50);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.glowing-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.6), transparent 70%);
  transform: rotate(45deg);
  animation: glow 2.5s infinite linear;
  z-index: -1;
}

/* Animación del brillo que recorre el botón */
@keyframes glow {
  0% {
    transform: translateX(-200%) translateY(-200%);
  }
  50% {
    transform: translateX(200%) translateY(200%);
  }
  100% {
    transform: translateX(400%) translateY(400%);
  }
}
</style>
