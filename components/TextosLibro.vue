<template>
  <div class="contenedor-oferta-contador mb-[80px] flex flex-col justify-center  p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg">
    <h3 class="text-lg lg:text-2xl text-center text-white tracking-[0.06em] mb-6">
      Esta oferta acabará en: 
    </h3>
    
    <!-- Contador visual elegante -->
    <div v-if="!isExpired" class="flex justify-center gap-4 mb-[20px]">
      <div class="contador-item">
        <p class="text-4xl lg:text-6xl font-bold text-yellow-400">{{ hours }}</p>
        <span class="text-white text-sm lg:text-lg">Horas</span>
      </div>
      <div class="contador-item">
        <p class="text-4xl lg:text-6xl font-bold text-yellow-400">{{ minutes }}</p>
        <span class="text-white text-sm lg:text-lg">Minutos</span>
      </div>
      <div class="contador-item">
        <p class="text-4xl lg:text-6xl font-bold text-yellow-400">{{ seconds }}</p>
        <span class="text-white text-sm lg:text-lg">Segundos</span>
      </div>
    </div>

    <ButtonVillegas v-if="!isExpired"> 
      ¡Compra Ahora y Manifiesta la Vida de Tus Sueños!
    </ButtonVillegas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isExpired = ref(false) // Controla si el tiempo ha expirado

const countDownDuration = 24 * 60 * 60 * 1000 // 24 horas en milisegundos
let countdownTimer

onMounted(() => {
  const savedEndTime = localStorage.getItem('countdownEndTime')
  
  if (savedEndTime) {
    const remainingTime = new Date(savedEndTime) - new Date()
    
    if (remainingTime > 0) {
      startCountdown(remainingTime)
    } else {
      isExpired.value = true
    }
  } else {
    resetCountdown()
  }
})

function resetCountdown() {
  const endTime = new Date().getTime() + countDownDuration
  localStorage.setItem('countdownEndTime', new Date(endTime))
  startCountdown(countDownDuration)
}

function startCountdown(duration) {
  countdownTimer = setInterval(() => {
    const timeLeft = duration - (new Date().getTime() - new Date(localStorage.getItem('countdownEndTime')).getTime())

    if (timeLeft <= 0) {
      clearInterval(countdownTimer)
      isExpired.value = true // Marcar como expirado
    } else {
      hours.value = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
      minutes.value = Math.floor((timeLeft / (1000 * 60)) % 60)
      seconds.value = Math.floor((timeLeft / 1000) % 60)
    }
  }, 1000)
}
</script>

<style scoped>
.contenedor-oferta-contador {
  background: linear-gradient(45deg, #040307, #130f01); /* Degradado de fondo */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.contador-item {
  text-align: center;
}

.contador-item p {
  margin: 0;
}

.contador-item span {
  display: block;
  margin-top: 0.5rem;
}
</style>
