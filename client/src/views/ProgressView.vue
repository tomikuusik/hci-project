<template>
  <div id="tasks-window">
    <CoursesList class="side-window" />
    <div class="main-window">
      <div id="header">
        <h1>{{ activeCourse.name }}</h1>
        <p>{{ activeCourse.description }}</p>
      </div>
      <div id="statistics-box" class="box">
        <a-progress
          type="circle"
          :percent="activeCourse.progress"
          :strokeWidth="10"
          :width="200"
          :stroke-color="{
            '0%': 'red',
            '50%': 'yellow',
            '75%': 'lightgreen',
            '100%': 'green',
          }"
          :format="(percent) => `${getGrade}`"
        />
        <p>Gained points: 00.00</p>
        <p>Lost points: 00.00</p>
        <p>Available points: 00.00</p>
      </div>
      <div id="highestgrade-box" class="box">
        <div id="left">
          <p>Highest possible grade</p>
          <h1>E</h1>
        </div>
        <div id="right">
          <h2>Tasks so far</h2>
          <p>Submitted on time: 0</p>
          <p>Deadlines missed: 0</p>
          <p>Tasks to submit: 0</p>
        </div>
      </div>
      <div id="estimatedgrade-box" class="box">
        <div>
          <p>Esitmated grade</p>
          <h2>E</h2>
        </div>
        <div>
          <p>Average point loss per point gained:</p>
          <h2>0.5</h2>
        </div>
        <div>
          <p>Points lost due to missed deadlines:</p>
          <h2>20</h2>
        </div>
        <div>
          <p>Average point loss per submission:</p>
          <h2>5</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import CoursesList from "@/components/CoursesList.vue";
export default {
  components: {
    CoursesList,
  },
  computed: {
    activeCourse() {
      return this.$store.getters.activeCourse;
    },
    getGrade() {
      let gradingsystem = this.activeCourse.gradingsystem;
      var progress = this.activeCourse.progress;
      console.log(gradingsystem);
      if (!gradingsystem.gradable) {
        if (this.activeCourse.progress > 50) {
          return "AR";
        }
        return "MA";
      }
      if (progress > gradingsystem.startA) {
        return "A";
      }
      if (progress > gradingsystem.startB) {
        return "B";
      }
      if (progress > gradingsystem.startC) {
        return "C";
      }
      if (progress > gradingsystem.startD) {
        return "D";
      }
      if (progress > gradingsystem.startE) {
        return "E";
      }
      return "F";
    },
  },
};
</script>
<style lang="scss" scoped>
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
    max-width: 100%;
    display: grid;
    grid-template:
      "header header" auto
      "left-side right-side-up" auto
      "left-side right-side-down" auto
      / 40% 60%;
    margin-left: 1em;
    gap: 1em;

    #header {
      margin-left: 2em;
    }

    h1 {
      font-weight: bolder;
    }

    .box {
      border: 1.5px solid lightgray;
      background-color: white;
      border-radius: 10px;
    }
    #header {
      grid-area: header;
    }
    #statistics-box {
      grid-area: left-side;
      height: 100%;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    #highestgrade-box {
      grid-area: right-side-up;
      width: 100%;
      height: fit-content;
      display: grid;
      grid-template:
        "left right"
        / 50% 50%;
      #left {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5%;
        h1 {
          font-size: 3em;
        }
      }
      #right {
        h2 {
          font-size: 1.5em;
        }
        p {
          font-size: 1em;
        }
      }
    }
    #estimatedgrade-box {
      grid-area: right-side-down;
      width: 100%;
      display: grid;
      grid-template:
        "top-left top-right" 50%
        "bot-left bot-right" 50%
        / 50% 50%;
      div {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
