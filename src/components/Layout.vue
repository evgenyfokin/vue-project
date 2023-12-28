<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Layout",
  components: {Footer, Header},
}
</script>

<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style scoped lang="scss">

</style>