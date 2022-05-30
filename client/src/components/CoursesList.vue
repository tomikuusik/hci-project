<template>
  <div>
    <h2>Courses</h2>
    <div id="courses-list">
      <p
        v-for="course in courses"
        :key="course.name"
        class="course-name"
        @click="setActiveCourse(course.name)"
      >
        {{ course.name }}
      </p>
      <button
        id="add-course"
        @click="this.$store.dispatch('startAddingNewCourse')"
      >
        <p>+</p>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default {
  methods: {
    setWindowToAddTask() {
      this.$store.dispatch("setTasksViewToAddTaskWindow");
    },
    setActiveCourse(course: string) {
      this.$store.dispatch("setActiveCourseTo", course);
    },
  },
  computed: {
    courses() {
      return this.$store.getters.courses;
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  display: grid;
  padding: 2em 1em;
  display: inline-flex;
  flex-direction: column;

  #courses-list {
    display: inline-flex;
    flex-direction: column;
    gap: 1em;
  }

  h2 {
    align-self: center;
    margin-bottom: 1em;
  }

  .course-name {
    font-size: large;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
    &:active {
      cursor: grab;
    }
  }

  #add-course {
    display: inline-flex;
    width: 100%;
    height: 2em;
    background-color: white;
    border-radius: 10px;
    border: 1.5px solid lightgray;

    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }
    &:active {
      cursor: grab;
    }

    p {
      margin: 0;
      font-size: 2em;
    }
  }
}
</style>
