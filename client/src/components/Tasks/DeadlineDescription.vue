<template>
  <div>
    <div id="date">
      <p id="deadline">{{ task.deadline }}</p>
      <p id="timetodeadline">time left</p>
    </div>
    <h2 id="title">{{ task.name }}</h2>
    <div id="description">{{ task.description }}</div>
    <button
      class="button"
      @click="this.$store.dispatch('markTaskAsDone', task)"
      id="done"
    >
      Mark as done
    </button>
    <div id="footer">
      <p id="eta">~{{ task.eta }}h</p>
      <p id="points">{{ task.points }}</p>
      <p id="type">{{ task.groupwork ? "Group" : "Individual" }}</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    task: Object,
  },
};
</script>
<style lang="scss" scoped>
#deadline-description {
  height: auto;
  display: grid;
  grid-template:
    "deadline button" 10%
    "title button" 20%
    "description description" auto
    "footer footer" 30%
    / 70% 30%;

  padding: 1em;
  gap: 0.5em;

  border: 1.5px solid lightgray;
  background-color: white;
  border-radius: 10px;

  .button:hover {
    background-color: lightgreen;
  }

  #date {
    grid-area: deadline;
    gap: 1em;
    display: inline-flex;
    * {
      margin: 0;
    }
  }

  #title {
    grid-area: title;
  }
  .button {
    grid-area: button;
    width: auto;
  }

  #description {
    grid-area: description;
  }

  h2 {
    margin: 0;
  }
  #footer {
    border-top: 0.2em solid;
    border-color: lightgray;

    width: 100%;
    grid-area: footer;
    display: inline-flex;
    justify-content: space-around;
    p {
      font-weight: bold;
    }
  }
}
</style>
