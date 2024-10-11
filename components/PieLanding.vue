<template>
    <div class="contenedorgeneralpielandign">
        <div class="imagenlogoiconosredes">
  <img class="w-[150px]" src="@/assets/images/logometodovillegas.webp" alt="Logo metodo villegas">
  <h2 class="ml-3 text-xl text-white" >Método Villegas</h2>
  <div class="text-white mt-[20px] mb-[20px] flex flex-col gap-[10px]">
    <div class="flex flex-row gap-[7px] align-center">
 <Instagram/> <span class="text-xl lg:text-2xl">@equipartumente  </span>
    </div>
   <div class="flex flex-row gap-[7px] align-center">
  <Tiktok/> <span class="text-xl lg:text-2xl">@equipartumente  360  </span>
   </div>
  
  </div>
        </div>

    </div>
</template>
<style scoped>
.imagenlogoiconosredes{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contenedorgeneralpielandign{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

}
 @media (min-width: 240px) and (max-width: 768px) {
    .contenedorgeneralpielandign{
flex-direction: column;
gap: 20px;
    }
  
 }
 @media (min-width: 769px) {
     .contenedorgeneralpielandign{
flex-direction:row;
gap: 30px;
    }
    
 }
</style>