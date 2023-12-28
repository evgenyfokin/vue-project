<script>
import Masonry from 'masonry-layout'
import ProjectComp from "@/components/ProjectComp.vue";
import Banner from "@/components/Banner.vue";
import {mapState} from "vuex";


export default {
  name: "OurProject",
  components: {Banner, ProjectComp},
  data() {
    return {
      filteredContent: [],
      types: [
          'Architecture', 'Living Area', 'Kitchen', 'Bed Room'
      ],
      selectedType: '',
    }
  },
  computed: {
    ...mapState(['interior'])
  },
  created() {
    window.onload = () => {
      const grid = document.querySelector('.grid')
      const masonry = new Masonry(grid)
    }
    this.filteredContent = this.interior
    this.selectedType = this.types[0]
    console.log(this.filteredContent)
  },
  methods: {
    filterContent(type) {
      this.selectedType = type
      this.filteredContent = this.interior.filter(item => item.type.split('/')[1].trim() === type)
    }
  }
}

</script>
<template>
  <Banner title="Our Project" category="Home / Project" backgroundImageURL="bannerproject.jpg"></Banner>
  <div class="container">
    <div class="types">
      <div class="types__holder">
        <button class="types__button" v-for="type in types" :key="type" :class="{'selected': selectedType ===type}"
        @click="filterContent(type)"
        >{{ type }}</button>
      </div>
    </div>
    <div class="grid container">
      <ProjectComp class="item" :is-bigger="index === 0 || (index + 1) % 3 === 0" v-for="(item, index) in filteredContent"
                   :data="item"></ProjectComp>
    </div>
  </div>
</template>

<style scoped>
.types {
  display: flex;
  justify-content: center;
  .types__holder {
    border-radius: 18px;
    border: 1px solid #CDA274;
  }
  .types__button {
    font-size: 18px;
    color: #292F36;
    background-color: #fff;
    padding: 26px 66px;
    border-radius: 18px;
  }
  .selected {
    background-color: #CDA274;
    color: white;
  }
}

.grid {
}

.item {
  width: calc(50% - 50px);
  margin: 5px;


  .item__pic {
  }
}

.square {
  height: 500px;
  background-color: #90af6d;
}

.rectangle {
  height: 800px;
  border: 1px solid #000;
}
</style>