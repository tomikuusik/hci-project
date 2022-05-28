<template>
  <div id="view-courses-window">
    <div id="header">
      <h1>Course name</h1>
      <p id="course-description">Description for the course by the user</p>
      <p id="date">20/02/2022 - 05/06/2022</p>
      <div id="button-box">
        <div class="button">Edit Course</div>
        <div class="button">+ Add Task</div>
      </div>
    </div>
    <div class="content">
      <DeadlineDescription id="deadline-description" />
    </div>
  </div>
</template>
<script lang="ts">
import DeadlineDescription from "./DeadlineDescription.vue";
export default {
  components: { DeadlineDescription },
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
