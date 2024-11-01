<template>
  <div>
    <section v-if="!isReady" class="bg-main text-white text-center relative">
      <div class="skeleton w-full h-[500px]"></div>
      <div class="skeleton-text mt-4"></div>
    </section>

    <section v-else class="bg-main text-white text-center relative">
      <picture class="w-full">
        <source :srcset="imageDesktop" media="(min-width: 600px)" class="w-screen object-cover" />
        <img :src="imageMobile" alt="Responsive Banner" class="w-full h-[500px] object-cover" width="500" height="500" />
      </picture>
   <!--    <div class="absolute bottom-[10%] left-[20%]">
        <ButtonAncla :url="buttonUrl">
          {{ buttonText }}
        </ButtonAncla>
      </div> -->
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BannerImage",
  data() {
    return {
      isReady: false,
      imageDesktop: "",
      imageMobile: "",
      buttonText: "",
      buttonUrl: ""
    };
  },
  async mounted() {
    try {
      const response = await axios.get("https://dapper-vacherin-b465fb.netlify.app/.netlify/functions/proxy-google-sheet?sheet=Bannerprincipal");
      const data = response.data;

      if (data.length > 0) {
        const bannerData = data[0];
        this.imageDesktop = bannerData.imagen_banner_desktop;
        this.imageMobile = bannerData.imagen_banner_mobil;
        this.buttonText = bannerData.texto_boton_banner;
        this.buttonUrl = bannerData.url_boton_banner;
      }

      this.isReady = true; // Marcar que los datos están listos para ser renderizados
    } catch (error) {
      console.error("Error fetching data from Google Sheets", error);
    }
  }
};
</script>


<style scoped>
.bg-main {
  background-color: #1a202c; /* Example background color, change as needed */
}

.skeleton {
  background-color: #e0e0e0; /* Color de fondo para el loader */
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-text {
  width: 200px;
  height: 20px;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
