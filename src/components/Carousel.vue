<script>
import '@splidejs/vue-splide/css';


export default ( {
  name: "Carousel",
} );
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="../assets/img/article1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/img/article2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/img/article3.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>

<style scoped lang="scss">
img {
  border-radius: 30px;
  width: 100%;
  aspect-ratio: 2/1;
}
</style>
