<template>
  <div id="view-courses-window">
    <div id="header">
      <h1>{{ this.$store.state.activeCourse }}</h1>
      <p id="course-description">Description for the course by the user</p>
      <div id="button-box">
        <button class="button" @click="showTasks" id="discard">
          Discard task
        </button>
        <button class="button" @click="saveTask" id="save">Save task</button>
      </div>
    </div>
    <div class="content">
      <label for="task-name">Task name:</label>
      <div class="inputarea">
        <input type="text" id="task-name" v-model="taskname" />
      </div>
      <label for="description">Description:</label>
      <div class="inputarea">
        <input
          type="text"
          name="description"
          v-model="description"
          id="description"
        />
      </div>
      <label>Deadline:</label>
      <div class="inputarea" id="deadline">
        <input type="datetime-local" name="date" id="date" v-model="date" />
        <p>repeats:</p>
        <input type="checkbox" name="repeats" id="repeats" v-model="repeats" />
        <p>every:</p>
        <input type="number" name="count" id="count" v-model="count" />
        <select name="period" id="period" v-model="repeatPeriod">
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
        </select>
      </div>
      <label>Points:</label>
      <div class="inputarea">
        <input type="number" name="eap" id="eap" v-model="eap" />
      </div>
      <label>Time estimate:</label>
      <div class="inputarea">
        <input type="number" name="hours" id="hours" v-model="hours" />
        <p>hours a</p>
        <select name="period" id="period" v-model="timePeriod">
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
        </select>
      </div>
      <label>Groupwork:</label>
      <div class="inputarea">
        <input
          type="checkbox"
          name="isgroupwork"
          id="isgroupwork"
          v-model="isgroupwork"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      taskname: "",
      description: "",
      date: "",
      repeats: false,
      count: 0,
      repeatPeriod: "",
      eap: 0,
      hours: 0,
      timePeriod: "",
      isgroupwork: false,
    };
  },
  methods: {
    showTasks() {
      this.$store.dispatch("showTasks");
    },
    saveTask() {
      this.$store.commit("addTask", {
        name: this.taskname,
        description: this.description,
        deadline: this.date,
        repeats: this.repeats,
        every: this.count,
        period: this.repeatPeriod,
        points: this.eap,
        eta: this.hours,
        etaPeriod: this.timePeriod,
        groupwork: this.isgroupwork,
      });
      this.$store.dispatch("showTasks");
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
      "course-name buttons" 70%
      "course-description buttons" 30%
      / 80% 20%;

    border-bottom: 0.2em solid;
    border-color: lightgray;

    h1 {
      grid-area: course-name;
      font-size: 2em;
    }

    #course-description {
      grid-area: course-description;
    }
    #button-box {
      display: inline-flex;
      grid-area: buttons;
      flex-direction: column;
      gap: 0.5em;

      #discard {
        background-color: red;
      }
      #save {
        background-color: green;
      }
    }
  }
  .content {
    display: grid;
    margin-top: 1em;
    grid-template-rows: 10% 30% repeat(4, 10%);
    grid-template-columns: 20% 80%;
    row-gap: 1em;

    .inputarea {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1em;

      input[type="text"] {
        width: 100%;
      }

      input[type="number"] {
        width: 3em;
      }

      #isgroupwork {
        width: auto;
      }

      #description {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
