<template>
  <div id="page">
    <SideBar id="sidebar" />
    <main>
      <router-view class="window" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    SideBar,
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

<style lang="scss" scoped>
$not-selected-color: #dedede;
$selected-color: #f7f7f7;
body {
  padding: 0;
  margin: 0;

  #app {
    display: grid;
    grid-template:
      "page-content" auto
      "footer" min-content
      / auto;

    #page {
      grid-area: page-content;
      margin: 20vh 10vw;
      display: grid;
      grid-template-columns: [sidebar] 15% [main] 85% [end];
      height: 35em;
      box-shadow: 5px 5px 5em;
      #sidebar {
        width: 100%;
        height: 100%;
        grid-column: sidebar;
        background-color: $not-selected-color;
      }
      main {
        grid-column: main;
        height: 100%;

        * {
          height: 100%;
        }

        & > :first-child {
          margin: 0;
          padding: 0;
          background-color: $selected-color;
        }

        .window {
          * {
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
