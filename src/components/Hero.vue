<script>
export default {
  name: "Hero",
};
</script>

<template>
  <main class="hero container">
    <h1>Let Your Home Be Unique
    </h1>
    <p>
      There are many variations of the passages of
      lorem Ipsum fromavailable, majority.
    </p>
    <router-link to="/ourproject"><button class="hero__button">Get Started
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
              stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    </button>
    </router-link>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/styles/mixins";

.hero {
  width: 100%;
  height: 70vh;
  background-image: url("../assets/img/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 18px;
  padding: 48px;
  h1 {
    @include title-style(65px);
    max-width: 434px;
  }
  p {
    max-width: 433px;
  }
  &__button {
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    background-color: #292F36;
    border-radius: 18px;
    padding: 26px 29px;
  }
}
</style>