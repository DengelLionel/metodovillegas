<template>
  <section id="conocenos" class="text-gray-600 body-font bodytransparente py-12">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <!-- Imagen de la sección "Conócenos" -->
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded shadow-lg" alt="team" src="https://via.placeholder.com/600x400">
      </div>
      <!-- Texto y detalles de la sección "Conócenos" -->
      <div class="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
        <h2 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-300">Conócenos Mejor</h2>
        <p class="mb-8 leading-relaxed text-lg text-gray-400">En nuestra empresa, creemos en el poder de la innovación y la excelencia. Desde nuestros inicios, hemos trabajado incansablemente para ofrecer productos de la más alta calidad, construyendo relaciones de confianza y asegurando el éxito en cada proyecto que emprendemos.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Saber Más</button>
          <a class="ml-4 inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600">
            <span>Descubre más</span>
            <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7m0 0l-7 7m7-7H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bodytransparente{
  background-color: rgba(10, 8, 1, 0.5);
}
/* Estilos adicionales para mejorar la presentación */
.title-font {
  font-family: 'Lato', sans-serif;
}

body-font {
  font-family: 'Lato', sans-serif;
}

/* Responsividad adicional para imágenes */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
