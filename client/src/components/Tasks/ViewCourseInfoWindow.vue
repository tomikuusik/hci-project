<template>
  <div id="view-courses-window">
    <div id="header">
      <h1>{{ this.$store.getters.activeCourse.name }}</h1>
      <p id="course-description">{{ activeCourse.description }}</p>
      <p id="date">{{ this.$store.getters.activeCourse.date }}</p>
      <div id="button-box">
        <button @click="this.$store.dispatch('startEditingCourse')">
          Edit Course
        </button>
        <button @click="setWindowToAddTask" class="button">+ Add Task</button>
      </div>
    </div>
    <div class="content">
      <DeadlineDescription
        id="deadline-description"
        v-for="task in this.$store.getters.activeCourseTasks"
        :key="task.name"
        :task="task"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import DeadlineDescription from "./DeadlineDescription.vue";
export default {
  components: { DeadlineDescription },
  computed: {
    activeCourse() {
      return this.$store.getters.activeCourse;
    },
  },
  methods: {
    setWindowToAddTask() {
      this.$store.dispatch("setTasksViewToAddTaskWindow");
    },
  },
};
</script>
<style lang="scss" scoped>
#view-courses-window {
  display: grid;
  padding: 2em;
  grid-template-rows: 25% 75%;

  #header {
    display: grid;
    grid-template:
      "course-name date buttons" 70%
      "course-description course-description buttons" 30%
      / 40% 40% 20%;

    border-bottom: 0.3em solid;
    border-color: gray;

    h1 {
      grid-area: course-name;
      font-size: 2em;
    }

    #course-description {
      grid-area: course-description;
    }
    #date {
      display: flex;
      justify-content: flex-end;
      grid-area: date;
      padding-top: 0.5em;
      padding-right: 2em;
    }
    #button-box {
      display: inline-flex;
      grid-area: buttons;
      flex-direction: column;
      gap: 0.5em;
    }
  }
  .content {
    margin-top: 1em;
  }
}
</style>
