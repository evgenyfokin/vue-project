<script>
import ProjectComp from "@/components/ProjectComp.vue";
import {mapState} from "vuex";

export default {
  name: 'Interior',
  components: {ProjectComp},
  data() {
    return {}
  },
  computed: {
    ...mapState(['interior'])
  }
}
</script>

<template>
  <section class="interior container">
    <h2>Follow Our Projects</h2>
    <p>It is a long established fact that a reader will be distracted by the of readable content of page
      lookings at its layouts points.</p>
    <div class="interior__content">
      <ProjectComp class="interior__content--card" v-for="(item, index) in interior.slice(0, 4)"
                   :data="item"></ProjectComp>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "../assets/styles/mixins";


.interior {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 96px 0;

  h2 {
    @include title-style(50px)
  }

  p {
    max-width: 737px;
    text-align: center;
    padding-bottom: 100px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 1185px) {
      justify-content: center;
    }

    &--card {
      width: 547px;
    }
  }
}
</style>





