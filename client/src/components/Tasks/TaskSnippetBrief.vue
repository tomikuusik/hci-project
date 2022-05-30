<template>
  <div id="taskSnippetBrief">
    <p id="name">{{ task.name }}</p>
    <p id="deadline">{{ task.deadline }}</p>
    <p id="description">{{ task.description }}</p>
    <p id="points">{{ task.points }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default {
  props: {
    task: Object,
  },
};
</script>
<style lang="scss" scoped>
#taskSnippetBrief {
  border: 1.5px solid lightgray;
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template:
    "taskName deadline" auto
    "description points" auto
    / 50% 50%;
}
</style>
