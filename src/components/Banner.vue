<script>
export default {
  name: "Banner",
  props: {
    title: String,
    category: String,
    backgroundImageURL: String
  }
}
</script>
<template>
  <div class="banner" :style="{backgroundImage: 'url(' + require(`@/assets/img/${backgroundImageURL}`) + ')'}">
    <div v-if="title" class="banner__title">
      <h1>{{ title }}</h1>
      <p>{{category}}</p>
    </div>
  </div>


</template>

<style scoped lang="scss">
@import "../assets/styles/mixins";
.banner {
  width: 100vw;
  height: 355px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 40px;
  &__title {
    background-color: #fff;
    padding: 41px 78px;
    text-align: center;
    border-radius: 37px 37px 0 0;
    h1 {
      @include title-style(50px)
    }
  }
}
</style>