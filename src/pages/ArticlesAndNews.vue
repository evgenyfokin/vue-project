<script >
import Banner from "@/components/Banner.vue";
import Articles from "@/components/Artlicles.vue";

export default {
  name: 'ArticlesAndNews',
  components: {Articles, Banner}
}
</script>
<template>
  <Banner title="Articles & News" category="Home / Blog" backgroundImageURL="articlesandnews.jpg"></Banner>
  <Articles :is-latest="true" :title="'Latest Post'" :limit="1"></Articles>
  <Articles :limit="6"></Articles>
</template>

<style scoped lang="scss">

</style>




