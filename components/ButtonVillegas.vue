<template>
      <button :type="type" class="bg-transparent border-[1.5px] border-boton hover:bg-boton text-white font-semibold py-3 px-8  transition-colors duration-300 ease-in-out">
        <slot>Botón</slot>
      </button>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',  // Tipo de botón por defecto
  },
});
</script>