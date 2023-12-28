<script>
export default {
  name: "Header"
}
</script>

<template>
  <header class="header container">
    <router-link to="/">
      <div class="header__logo">
        <img src="../assets/img/Logo.svg" alt="logo">
        <span>Interno</span>
      </div>
    </router-link>
    <nav>
      <ul class="header__list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/articlesandnews">Project</router-link></li>
        <li><router-link to="/blogDetails">Blog</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped lang="scss">
@import "../assets/styles/mixins";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;

  &__logo {
    @include title-style(40px);
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Serif Display', serif;
  }

  &__list {
    display: flex;
    gap: 30px;
    list-style-type: none;

    li {
      cursor: pointer;
      font-size: 20px;
    }
  }
}
</style>