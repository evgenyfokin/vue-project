<script>
export default {
  name: 'Triggers',
}
</script>

<template>
  <section class="triggers">
    <div class="container">
      <div class="triggers__item">
        <h2>12</h2>
        <p>Years Of Experiance</p>
      </div>
      <div class="triggers__watershed"></div>
      <div class="triggers__item">
        <h2>85</h2>
        <p>Success Project</p>
      </div>
      <div class="triggers__watershed"></div>
      <div class="triggers__item">
        <h2>15</h2>
        <p>Active Project</p>
      </div>
      <div class="triggers__watershed"></div>
      <div class="triggers__item">
        <h2>95</h2>
        <p>Happy Customers</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins";
.triggers {
  background-color: #F4F0EC;
  padding: 80px 0;
  @media (max-width: 875px) {
    padding: 0;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      @include title-style(85px);
      color: #CDA274;
    }
  }
  &__watershed {
    background-color: #CDA274;
    height: 130px;
    width: 1px;
    @media (max-width: 900px) {
      display: none;
    }
  }
}
</style>





