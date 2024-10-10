<template>
  <div class="faq-container max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Preguntas Frecuentes</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4 border-b last:border-none">
      <button @click="toggle(index)" class="w-full text-left flex justify-between items-center py-4">
        <span class="text-lg font-semibold text-gray-700">{{ faq.question }}</span>
        <span class="text-gray-500 transform transition-transform duration-300" :class="{'rotate-180': activeIndex === index}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <transition name="faq" mode="out-in">
        <p v-if="activeIndex === index" class="text-gray-600 py-2 px-4">{{ faq.answer }}</p>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: '¿Cómo este libro resolverá mis problemas actuales?',
    answer: 'Descubrirás cómo eliminar bloqueos mentales y atraer abundancia y éxito en solo 21 días con técnicas de visualización y reprogramación mental.',
  },
  {
    question: '¿Qué beneficios obtendré al comprar este libro?',
    answer: 'Mejorarás tu confianza, atraerás dinero y relaciones positivas, y alcanzarás la paz interior al transformar tu mente y emociones.',
  },
  {
    question: '¿Qué aprenderé exactamente?',
    answer: 'Aprenderás a reprogramar tus pensamientos, visualizar tus deseos y usar la gratitud para multiplicar tus manifestaciones.',
  },
  {
    question: '¿Qué pasará si no actúo ahora?',
    answer: 'Seguirás atrapado en los mismos ciclos de escasez, frustración y relaciones tóxicas, sin lograr cambios significativos en tu vida.',
  },
  {
    question: '¿Qué transformación experimentaré?',
    answer: 'En solo 21 días, pasarás de sentirte bloqueado y estancado, a vivir con abundancia, éxito y felicidad, sintiendo que finalmente controlas tu destino.',
  }
])

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* Animación suave para mostrar/ocultar las respuestas */
.faq-enter-active, .faq-leave-active {
  transition: opacity 0.3s ease;
}
.faq-enter-from, .faq-leave-to {
  opacity: 0;
}
</style>
