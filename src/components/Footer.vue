<script>
export default {
  name: 'Footer',
}
</script>

<template>
  <footer class="footer container">
    <div class="footer__logo">
      <div class="header__logo">
        <img src="../assets/img/Logo.svg" alt="logo">
        <span>Interno</span>
      </div>
      <p>It is a long established fact that a reader will be distracted lookings.</p>
      <div class="footer__logo-media">
        <img src="../assets/img/twitter.svg" alt="twitter">
        <img src="../assets/img/linkedin.svg" alt="linkedin">
      </div>
    </div>
    <div class="footer__list">
      <h4>Pages</h4>
      <nav>
        <ul class="header__list">
          <li><a href="/"><p>Home</p></a></li>
          <li><a href="#"><p>Project</p></a></li>
          <li><a href="#"><p>Blog</p></a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__contacts">
      <h4>Contact</h4>
      <p>5 East Birchwood Ave. Brooklyn, New York 11201</p>
      <p>contact@interno.com</p>
      <p>(123) 456 - 7890</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins";
.footer  {
  display: flex;
  justify-content: space-between;

  &__logo {
    @include title-style(40px);
    p {
      max-width: 393px;
      padding: 20px 0;
    }
    &-media {
      :first-child {
        padding-right: 40px;
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    h4 {
      @include title-style(25px);
    }
    ul {
      display: flex;
      gap: 30px;
      list-style-type: none;
      flex-direction: column;

    }
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 40px;

    h4 {
      @include title-style(25px);

    }
    p {
      max-width: 250px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 60px;
  }
}
</style>



