<template>
<div class="contenedor-general-regalos">
 <p class="text-xl lg:text-2xl text-left text-white  tracking-[0.06em] "> Y ESO NO ES NADA! Tambien para crecer tu
experiencia te doy estos 3 regalos especiales
para ti! : aqui esta pequeña lista 
mencionando esto:  </p>  
 <div class="contenedorcuadro-regalos">
    <div>
  <h3 class="text-titulo text-xl text-left lg:text-[2.1rem]">REGALO #1</h3>
        <p  class="text-lg lg:text-xl text-left text-white  tracking-[0.06em] "> <strong>“Mi Diario de Manifestación”</strong></p>
        <p  class="text-lg lg:text-xl text-left text-white tracking-[0.06em] ">Aprende a cultivar tus sueños diariamente en un espacio íntimo y mágico
que te conectará con tu poder interior, haciendo que cada día sea una
oportunidad para manifestar lo que más deseas.</p>
    </div>
      
<img src="/images/libro2.webp" class="w-[250px]" alt="regalo 1">
    </div>

    <div class="contenedorcuadro-regalos">
        <div>
 <h3 class="text-titulo text-xl text-left lg:text-[2.1rem]">REGALO #2</h3>
        <p  class="text-lg lg:text-xl text-left text-white tracking-[0.06em] "> <strong>“Los Secretos de los Sonidos Mágicos”</strong></p>
        <p  class="text-lg lg:text-xl text-left text-white tracking-[0.06em] ">Descubre cómo ciertos sonidos pueden abrir puertas a nuevas posibilidades en tu
vida y cómo utilizarlos para transformar tu realidad y manifestar tus sueños más
profundos.</p>
        </div>
       
<img src="/images/libro4.webp" class="w-[250px]" alt="regalo 2">
    </div>
        <div class="contenedorcuadro-regalos">
            <div>
  <h3 class="text-titulo text-xl text-left lg:text-[2.1rem]">REGALO #3</h3>
        <p  class="text-lg lg:text-xl text-left text-white tracking-[0.06em] "> <strong>“Números Mágicos para una Vida Abundante”</strong></p>
        <p  class="text-lg lg:text-xl text-left text-white tracking-[0.06em] ">Domina el poder de los códigos sagrados y la numerología para activar energías de
abundancia, superación y transformación, usando simples secuencias numéricas
</p>
            </div>
      
<img src="/images/regalo3.webp" class="w-[250px]" alt="regalo 3">
    </div>

    <h2 class="text-center text-3xl leading-normal  lg:text-[3rem] mb-6 text-titulo tracking-[0.06em] lg:leading-[4rem]">No dejes pasar esta oportunidad única. Transforma tu vida en solo 21 días, accede a
tus bonos exclusivos y comienza a vivir la vida que siempre has deseado.</h2>
<div class="flex flex-col justify-center">
<ButtonVillegas>
    Compra ahora por solo $14 y accede a la vida de tus sueños.
</ButtonVillegas>
</div>
</div>
   
    
</template>
<style scoped>
.contenedor-general-regalos{
    display: flex;
    flex-direction: column;
  
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
}
@media (min-width: 240px) and (max-width: 768px) {
    .contenedor-general-regalos{
  gap: 15px;
    }
        .contenedorcuadro-regalos{
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;

}
 .contenedorcuadro-regalos div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
 }
}
@media (min-width: 769px) {
     .contenedor-general-regalos{
  gap: 25px;
    }
    .contenedorcuadro-regalos{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width:730px;
}
 .contenedorcuadro-regalos div{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
 }
}

</style>