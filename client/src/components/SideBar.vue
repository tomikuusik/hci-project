<template>
  <nav>
    <router-link class="link" to="/"><a>Home</a></router-link>
    <router-link class="link" to="/tasks"><a>Tasks</a></router-link>
    <router-link class="link" to="/progress"><a>Progress</a></router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
$selected-color: #f7f7f7;
nav {
  display: grid;
  grid-template-rows: repeat(3, 3em);
  padding: 0;
  width: 10vw;

  .link {
    all: unset;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    a {
      // all: unset;
      font-weight: bold;
      font-size: large;
      color: black;
      &:hover {
        cursor: pointer;
      }
      &:active {
        cursor: grab;
      }
    }

    &.router-link-exact-active {
      background-color: $selected-color;
    }
  }
}
</style>
