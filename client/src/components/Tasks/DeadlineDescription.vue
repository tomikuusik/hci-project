<template>
  <div>
    <div id="date">
      <p id="deadline">May 11 - 06:00</p>
      <p id="timetodeadline">(1 d, 13h, 47 left)</p>
    </div>
    <h2 id="title">Paper prototype and heuristics</h2>
    <div id="description">Placeholder text xddd</div>
    <div class="button">Mark as done</div>
    <div id="footer">
      <p id="eta">~4 hours</p>
      <p id="points">20p/100p</p>
      <p id="type">Group</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
#deadline-description {
  height: 60%;
  display: grid;
  grid-template:
    "deadline button" 10%
    "title button" 20%
    "description description" 40%
    "footer footer" 30%
    / 70% 30%;

  padding: 1em;
  gap: 0.5em;

  border: 1.5px solid lightgray;
  background-color: white;
  border-radius: 10px;

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
