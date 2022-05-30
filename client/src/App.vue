<template>
  <div id="rootPage">
    <div class="sidebar">
      <SideBar class="window" />
      <CoursesList v-if="this.showCoursesList" class="window" />
    </div>
    <main>
      <router-view class="view" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "./components/SideBar.vue";
import CoursesList from "./components/CoursesList.vue";
export default {
  data() {
    return {
      showCoursesList: false,
    };
  },
  components: {
    SideBar,
    CoursesList,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        console.log(this.$route.name);
        if (this.$route.name === "home") {
          this.showCoursesList = false;
        } else {
          this.showCoursesList = true;
        }
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
}
</style>

<style lang="scss">
$not-selected-color: #dedede;
$selected-color: #f7f7f7;
.window {
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid lightgray;
}
#rootPage {
  display: grid;
  width: 100%;
  max-width: 1680px;
  padding: 10em 10em;
  grid-template-columns: [sidebar] 15% [buffer] 5% [main] 80% [end];
  .sidebar {
    width: 100%;
    height: min-content;
    grid-column: sidebar;
    display: inline-flex;
    flex-direction: column;
    gap: 2em;
    & > .window {
      width: 100%;
    }
  }
  main {
    grid-column: main;
  }
}
</style>
