<template>
  <div id="tasks-window">
    <component :is="this.$store.state.tasksTabWindow" class="main-window" />
  </div>
</template>
<script lang="ts">
import CoursesList from "@/components/CoursesList.vue";
import store from "@/store";
import ViewCourseInfoWindow from "@/components/Tasks/ViewCourseInfoWindow.vue";
import AddTaskWindow from "@/components/Tasks/AddTaskWindow.vue";
import EditCourseWindow from "@/components/Tasks/EditCourseWindow.vue";
export default {
  components: {
    CoursesList,
    ViewCourseInfoWindow,
    AddTaskWindow,
    EditCourseWindow,
  },
};
</script>
<style lang="scss">
button,
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
</style>
