<template>
  <div class="home">
    <h1>Welcome {{ username }}</h1>
    <div id="windows">
      <CalendarWindow class="window" />
      <DeadlinesWindow class="window" />
      <ProgressionWindow class="window" />
    </div>
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
  color: black;
  display: grid;
  grid-template-rows: 10% 90%;
  max-height: 100%;
  max-width: 100%;

  h1 {
    place-self: center;
  }
  #windows {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    max-height: inherit;
    justify-items: center;

    .window {
      height: 100%;
      width: 100%;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .cover {
        width: 73%;
        height: 53%;
        background-color: white;
        border-radius: 10px;
        border: 1.5px solid lightgray;
        overflow-y: scroll;
      }

      h1 {
        height: 1.5em;
      }
    }
  }
}
</style>
