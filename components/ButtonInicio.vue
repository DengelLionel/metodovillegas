<template>
  <a
    :id="id"
    @click.prevent="scrollToSection(enviara)"
    class="bg-boton cursor-pointer border-[1.5px] rounded-full border-boton tracking-[0.09em] hover:text-primary text-primary font-semibold py-3 px-8 transition-transform duration-300 ease-in-out text-xl shadow-button animate-button glowing-button"
  >
    <slot>Botón</slot>
  </a>
</template>

<script setup>
// Definir las propiedades del componente
const props = defineProps({
  id: {
    type: String,
    default: null,  // El id es opcional
  },
  enviara: {
    type: String,
    default: null,  // El id de la sección a la que se desplazará
  }
});

import { useScrollToSection } from '~/composables/useScrollToSection';

// Usar el composable para manejar el desplazamiento
const { scrollToSection } = useScrollToSection();
</script>

<style scoped>
/* Sombra inicial con efecto dorado opaco */
.shadow-button {
  box-shadow: 0 4px 15px rgba(231, 179, 70, 0.5); /* Luz dorada opaca */
  text-transform: uppercase;
}

.shadow-button:hover {
  box-shadow: 0 6px 20px rgba(231, 179, 70, 0.7); /* Luz dorada opaca más intensa */
}

/* Animación suave de escalado al hacer hover */
.animate-button {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.animate-button:hover {
  transform: scale(1.05); /* Escalado suave al pasar el mouse */
}

/* Fondo dorado opaco con los tres colores */
.glowing-button {
  background: linear-gradient(45deg, #e4b147, #a97a28, #e7b346); /* Gradiente dorado opaco */
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
  background: radial-gradient(circle, rgba(231, 179, 70, 0.4), transparent 70%);
  transform: rotate(45deg);
  animation: glow 2.5s infinite linear;
  z-index: -1;
}

/* Animación del brillo dorado opaco */
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
