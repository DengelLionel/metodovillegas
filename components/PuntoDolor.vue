<template>
     <div class="contenedor-puntodolor">
        <img class="w-full h-auto" src="/images/te-lo-mereces2.webp" alt="Te lo mereces">
        <div class="contenedor-textos">
   <p class="text-lg lg:text-xl text-center mb-10 text-white mt-10 tracking-[0.06em] ">
          ¿Sientes que, por más que lo intentas, no logras vivir la vida que siempre has deseado? 
          ¿Estás
cansado/a de trabajar sin ver resultados y de sentir que algo te bloquea constantemente?
        </p>
        <p class="text-lg lg:text-xl text-center mb-10 text-white mt-10 tracking-[0.06em] ">
          <strong>
            ¿Qué pasaría si pudieras cambiar todo eso en solo 21 días?
¿Qué pasaría si tu mente fuera una herramienta poderosa que te ayudara a atraer el éxito y la
abundancia que siempre has deseado?
            </strong>  
        </p>
        <p class="text-lg lg:text-xl text-center mb-10 text-white mt-10 tracking-[0.06em] ">
            Hoy en día, es probable que te sientas atrapado/a en una vida llena de limitaciones,
bloqueos mentales y emociones negativas que te mantienen alejado/a de la vida que
realmente mereces.
        </p>
        </div>
     
      </div>
</template>
<style scoped>
 .contenedor-puntodolor{
    margin-top: 50px;
    margin-bottom: 50px;
 }
 .contenedor-textos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
 }
@media (min-width: 240px) and (max-width: 768px) {
    .contenedor-puntodolor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
}
@media (min-width: 769px) and (max-width: 1000px) {
     .contenedor-puntodolor{
        display: flex;
        flex-wrap: wrap;
          justify-content: center;
        align-items: center;
        gap: 15px;
     }
}
@media (min-width: 1001px) {
     .contenedor-puntodolor{
        display: flex;
        flex-direction: row;
          justify-content: center;
        align-items: center;
        gap: 20px;
     }
}
</style>