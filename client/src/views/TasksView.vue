<template>
  <div id="tasks-window">
    <CoursesList class="side-window" />
    <!-- <ViewCoursesWindow class="main-window" /> -->
    <AddTaskWindow class="main-window" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import CoursesList from "@/components/CoursesList.vue";
import ViewCoursesWindow from "@/components/Tasks/ViewCoursesWindow.vue";
import AddTaskWindow from "@/components/Tasks/AddTaskWindow.vue";
export default {
  components: {
    CoursesList,
    // ViewCoursesWindow,
    AddTaskWindow,
  },
};
</script>
<style lang="scss">
.button {
  text-align: center;
  vertical-align: middle;
  line-height: 2em;

  border: 1.5px solid lightgray;
  background-color: white;
  border-radius: 10px;

  width: 100%;
  height: 2em;

  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: grab;
  }
}

#tasks-window {
  display: grid;
  grid-template-columns: 2% 20% 76% 2%;
  grid-template-rows: 5% 90% 5%;
  grid-template-areas:
    ". . . ."
    ". side-window main-window ."
    ". . . .";

  .side-window {
    grid-area: side-window;
  }
  .main-window {
    grid-area: main-window;
    overflow: hidden;
  }
}
</style>
