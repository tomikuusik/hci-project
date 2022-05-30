<template>
  <div id="view-courses-window">
    <div id="header">
      <h1>{{ activeCourse.name }}</h1>
      <div id="button-box">
        <button @click="discardCourse">Discard Course</button>
        <button @click="saveCourse" class="button">Save Course</button>
      </div>
    </div>
    <div class="content">
      <p>Course Name</p>
      <div class="inputArea">
        <input type="text" name="courseName" v-model="activeCourse.name" />
      </div>
      <p>Description</p>
      <div class="inputArea">
        <input
          type="text"
          name="courseDescription"
          v-model="activeCourse.description"
        />
      </div>
      <p>Grading</p>
      <div class="inputArea" id="gradingRow">
        <button>Edit Grading</button>
        <p>starting from</p>
        <input
          type="datetime-local"
          name="courseStart"
          id="courseStart"
          v-model="activeCourse.startdate"
        />
        <p>ending at</p>
        <input
          type="datetime-local"
          name="courseEnd"
          v-model="activeCourse.enddate"
        />
      </div>
      <!-- <p>Tasks</p> -->
      <!-- <div id="tasksBox">
        <TaskSnippetBrief
          v-for="task in activeCourse.tasks"
          :key="task.name"
          :task="task"
        />
        <button @click="addTask">+</button>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
// import TaskSnippetBrief from "./TaskSnippetBrief.vue";
export default {
  data() {
    return {
      new: false,
      activeCourse: Object,
    };
  },
  mounted: function () {
    this.activeCourse = this.$store.getters.activeCourse;
    if (this.activeCourse.name === "") {
      this.new = true;
    }
  },
  methods: {
    saveCourse() {
      this.$store.dispatch("setTasksViewToAddTaskWindow");
      if (this.new) {
        this.$store.commit("addCourse", this.activeCourse);
      } else {
        this.$store.commit("updateCourse", this.activeCourse);
      }
    },
    discardCourse() {
      if (!this.new) {
        this.$store.dispatch("discardCourse", this.activeCourse.name);
      } else {
        this.$store.dispatch("showTasks");
      }
    },
  },
  // components: { TaskSnippetBrief },
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
    height: min-content;
    margin-top: 1em;
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: auto auto;

    .inputArea {
      justify-self: center;
      width: 80%;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      column-gap: 2em;
      input {
        height: 2em;
        width: 100%;
      }
    }
    #tasksBox {
      background-color: white;
      border-radius: 10px;
      border: 1.5px solid lightgray;
      overflow-y: scroll;
      padding: 1em;
    }
  }
}
</style>
