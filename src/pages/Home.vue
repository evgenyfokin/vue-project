<script>
import Hero from "@/components/Hero.vue";
import Interior from "@/components/Interior.vue";
import Triggers from "@/components/Triggers.vue";
import LatestPost from "@/components/Artlicles.vue";

export default {
  name: 'Home',
  components: {
    LatestPost,
    Triggers,
    Interior,
    Hero,
  }
}
</script>


<template>
  <Hero></Hero>
  <Interior></Interior>
  <Triggers></Triggers>
  <LatestPost limit="3" description="It is a long established fact that a reader will be distracted by the of readable
  content of a page when lookings at its layouts the points of using." isTitlePositionCentered="true"></LatestPost>
</template>

<style lang="scss">
@import "../assets/styles";
</style>




