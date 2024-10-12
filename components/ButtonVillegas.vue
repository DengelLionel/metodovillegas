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

// Función que maneja el clic
const handleClick = () => {
  if (props.url) {
    window.open(props.url, '_blank');  // Abre la URL en una nueva pestaña
  }
};
</script>
