<script>


import {mapState} from "vuex";

export default {
  name: "LatestPost",
  props: {
    isLatest: {
      type: Boolean,
      default: false
    },
    limit: Number,
    isTitlePositionCentered: Boolean,
    description: String,
    title: {
      type: String,
      default: 'Articles & News'
    },
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['articles'])
  }
}

</script>

<template>
  <section class="articles container">
    <h2 v-if="!isTitlePositionCentered" :style="{textAlign:'left'}">{{title}}</h2>
    <h2 v-else="isTitlePositionCentered" :style="{textAlign:'center'}">{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
    <div class="articles__holder">
      <div v-for="(article, index) in articles.splice(0, limit)" :key="index" class="article" :class="{'article__latest': isLatest}">
        <div class="article__above">
          <img class="article__img" :src="article.imageUrl">
          <a v-if="!isLatest" href="#" class="article__link">{{ article.type }}</a>
        </div>
        <div class="article__below">
          <h3>{{ article.title }}</h3>
          <p v-if="isLatest">{{ article.text }}</p>
          <div class="article__below-bottom">
            <span>{{ article.date }}</span>
            <button class="card-button card-button_smaller">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
                <path d="M24.2714 32.9527L30.2143 26.267L24.2714 19.5813" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/mixins";

.articles {
  display: flex;
  flex-direction: column;
  h2 {
    @include title-style(50px);
  }
  p {
    max-width: 811px;
    text-align: center;
    margin: 0 auto;
  }
  &__holder {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin: 52px 0 70px 0;
    @media (max-width: 1200px) {
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

.article {
  padding: 18px;
  border: 1px solid #E7E7E7;
  border-radius: 62px;
  width: fit-content;

  &__above {
    position: relative;

    a {
      position: absolute;
    }
  }

  &__img {
    max-width: 320px;
    border-radius: 62px 62px 0 0;
    display: flex;
  }

  &__link {
    border-radius: 8px 8px 8px 0;
    padding: 6px;
    background: #FFF;
    bottom: 0;
    margin: 15px;
    cursor: pointer;
  }

  &__below {
    margin: 15px 0;

    h3 {
      @include title-style(25px);
      max-width: 250px;
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__latest {
    display: flex;
    width: 100%;

    .article__above {
      width: 50%;

      img {
        border-radius: 62px 62px 62px 62px;
        max-width: 100%;
        width: 100%;
      }
    }

    .article__below {
      margin: auto;

      h3 {
        max-width: 463px;
      }

      p {
        max-width: 469px;
        padding: 22px 10px 41px 10px;
      }
    }
  }
}
}
</style>