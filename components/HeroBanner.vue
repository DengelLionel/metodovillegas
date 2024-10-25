<template>
  <section class="bg-main text-white text-center relative">
    <picture class="w-full">
      <!-- Image for desktop, only appears from 600px onwards -->
      <source srcset="https://img.freepik.com/free-photo/close-up-portrait-young-beautiful-attractive-redhair-girl-happy-with-something-pointing-finger-b_1258-124895.jpg?t=st=1729877748~exp=1729881348~hmac=8b45ca9b22273a5fa573df9d866721335d270cb7137355aafd8d05a24bb5a8c2&w=826" media="(min-width: 600px)" class="w-screen object-cover" />
      <!-- Image for mobile, appears below 600px -->
      <img src="https://img.freepik.com/free-photo/male-florist-showing-display-screen-mobile-phone-flower-shop_23-2148075347.jpg?t=st=1729877801~exp=1729881401~hmac=0474bbff537ac85a1626e01d0ed599f2075b52f34eca470c613ef37e5ccde684&w=360" alt="Responsive Banner" class="w-full h-[500px] object-cover" width="500" height="500" />
    </picture>
    <!-- Uncomment the button below if needed -->
    <div class="absolute bottom-[10%] left-[20%]">
      <ButtonAncla url="/manifestacion">
        Aprende más
      </ButtonAncla>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerImage",
};
</script>

<style scoped>
.bg-main {
  background-color: #1a202c; /* Example background color, change as needed */
}
</style>
