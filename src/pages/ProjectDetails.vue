<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "ProjectDetails",
  components: {Carousel, Banner, Header}
}
</script>

<template>
  <Banner backgroundImageURL="projectdetails.jpg"></Banner>
  <div class="container">
    <div class="intro">
      <h2>Minimal Look Bedrooms</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus.
        Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
        at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
        <br/>
        <br/>
        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc,
        mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,
        elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt
        ligula id purus porttitor.</p>
    </div>
    <div class="carousel--holder">
      <Carousel/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";
    .intro {
      width: 658px;
      margin: 0 auto;
      h2 {
        @include title-style(50px);
      }
    }
.carousel--holder {
  padding: 50px 0;
}
</style>