<script>
export default {
  name: "ProjectComp",
  props: {
    data: Object,
    isBigger: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<template>
  <div class="card">
    <div class="card__pic" :class="{ 'card__pic--rectangle': isBigger }" :style="{ backgroundImage: `url(${data.imageUrl})` }"></div>
    <div class="card__below">
      <div class="card__below--text">
        <h3>{{ data.title }}</h3>
        <p>{{ data.type }}</p>
      </div>
      <router-link to="/projectDetails">
        <button class="card-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";

.card {
  &__pic {
    aspect-ratio: 1/1;
    background-size: cover;
    background-repeat: no-repeat;

    &--rectangle {
      aspect-ratio: 2/3;
    }
  }

  &__below {
    display: flex;
    justify-content: space-between;
    padding: 25px 0;

    h3 {
      @include title-style(25px)
    }

    p {
      text-align: left;
    }
  }
}
</style>