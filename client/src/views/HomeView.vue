<template>
  <div class="home">
    <CalendarWindow />
    <DeadlinesWindow />
    <ProgressionWindow />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalendarWindow from "@/components/Home/CalendarWindow.vue";
import ProgressionWindow from "@/components/Home/ProgressionWindow.vue";
import DeadlinesWindow from "@/components/Home/DeadlinesWindow.vue";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      username: "Username",
    };
  },
  components: { CalendarWindow, ProgressionWindow, DeadlinesWindow },
});
</script>

<style lang="scss">
.home {
  height: 100%;
  display: inline-flex;
  max-height: inherit;
  justify-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 5em;

  & > * {
    flex-grow: 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  & h1 {
    font-weight: bolder;
  }

  .window {
    padding: 2em;
    min-width: 10em;
    width: 25em;
    min-height: 25em;
    height: fit-content;
    display: inline-flex;
    flex-direction: column;
  }

  h1 {
    height: 1.5em;
  }
}
</style>
