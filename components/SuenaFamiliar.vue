<template>
<div>


    <div class="contenedor-suenafamiliar">
        <div class="contenedor-textosf">
         
                <p class="text-lg lg:text-xl text-center text-white tracking-[0.06em] "><strong> Te esfuerzas día tras día, pero nunca logras el éxito que deseas.
</strong></p>
                  <p class="text-lg lg:text-xl text-center text-white tracking-[0.06em] "><strong>Atraes relaciones tóxicas y te preguntas por qué la felicidad parece estar fuera
de tu alcance.</strong></p>
                    <p class="text-lg lg:text-xl text-center text-white tracking-[0.06em] "><strong>Por más que intentes ahorrar, el dinero nunca es suficiente, y la abundancia
parece algo imposible.</strong></p>
             </div>
<!-- <img class="w-full h-auto lg:w-[50%]" src="/images/te-lo-mereces1.webp" alt="Te lo mereces"> -->
    </div>

    <p class="text-lg lg:text-xl text-center text-white tracking-[0.06em] "> 
        <strong>Si te identificas con alguna de estas situaciones, no estás solo/a.</strong>
    </p>
    <p class="text-lg lg:text-xl text-center text-white tracking-[0.06em] ">
        Millones de personas alrededor del mundo están atrapadas en estos mismos ciclos de
limitaciones. Pero la buena noticia es que no tiene que ser así. El primer paso para
cambiar tu vida es comprender que tienes el poder para manifestar todo lo que deseas, y lo
puedes hacer rápidamente, con las herramientas correctas.
    </p>
    </div>
</template>

<style scoped>
.contenedor-suenafamiliar{
      margin-top: 50px;
    margin-bottom: 50px;
}
.contenedor-textosf{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
 }
@media (min-width: 240px) and (max-width: 768px) {
  .contenedor-suenafamiliar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
}
@media (min-width: 769px) and (max-width: 1000px) {
.contenedor-suenafamiliar{
      display: flex;
        flex-wrap: wrap;
          justify-content: center;
        align-items: center;
        gap: 15px;
}
}
@media (min-width: 1001px) {
 .contenedor-suenafamiliar{
        display: flex;
        flex-direction: row;
          justify-content: center;
        align-items: center;
        gap: 20px;
     }
}
</style>