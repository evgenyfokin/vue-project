<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import {mapState} from "vuex";

export default {
  name: "BlogDetails",
  components: {Banner, Footer, Header},
  data() {
    return {
      filteredContent: [],
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
      selectedTag: '',
    }
  },
  created() {
    this.filteredContent = [this.blogDetails[0]];
    this.selectedTag = this.tags[0]
  },
  methods: {
    filterContent(tag) {
      this.selectedTag = tag
      this.filteredContent = this.blogDetails.filter(item => item.tag === tag)
      console.log(this.blogDetails)

    }
  },
  computed: {
    ...mapState(['blogDetails'])
  }
}
</script>

<template>
   <div class="blog container">
    <div v-for="elem in filteredContent" class="article">
      <h2>{{ elem.title }}</h2>
      <div class="article__img-holder" :style="{ 'background-image': `url(${elem.imageUrl})` }"></div>
      <div class="article__params">
        <span>{{elem.date}}</span>
        <span>{{elem.breadCrumbs}}</span>
      </div>
      <p class="article__text">{{elem.text}}</p>
      <div class="quote">
        <span>“</span>
        <p>The details are not the details.
          They make the design.</p>
      </div>
      <p class="article__text">{{elem.text}}</p>
      <div class="article__img-holder" :style="{ 'background-image': `url(${elem.imageUrl})` }"></div>
    </div>
    <div class="tags">
      <h3>Tags</h3>
      <div class="tags__items">
        <button
            v-for="tag in tags" class="tags__item" :key="tag" :class="{'selected': selectedTag === tag}"
            @click="filterContent(tag)"
        >{{ tag }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";

.blog {
  display: flex;
}

.article {
  flex: 1;
  h2 {
    @include title-style(50px)
  }

  &__text{
    padding: 25px 0;
  }
  &__img-holder {
    width: 100%;
    aspect-ratio: 9/5;
    border-radius: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 20px 0;
  }
  &__params {
    display: flex;
    justify-content: space-between;
    padding-right: 35px;
  }
  .quote {
    width: 100%;
    aspect-ratio: 9/3.5;
    background-color: #F4F0EC;
    border-radius: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #CDA274;
    span {
      font-size: 100px;
    }
    p {
      font-size: 25px;
      max-width: 345px;
      color: #CDA274;
      text-align: center;

    }
  }
}

.tags {
  width: 30%;
  padding: 0 30px;


  h3 {
    @include title-style(25px);
    margin-bottom: 20px;
  }

  &__items {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  &__item {
    padding: 9px 30px;
    background: #F4F0EC;
    list-style-type: none;
    border-radius: 10px;

    button {
      font-size: 18px;
    }
  }
}

.selected {
  background-color: #050000;
  color: white;
}
</style>