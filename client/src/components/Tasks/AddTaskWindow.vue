<template>
  <div id="view-courses-window">
    <div id="header">
      <h1>Course name</h1>
      <p id="course-description">Description for the course by the user</p>
      <div id="button-box">
        <div class="button" id="discard">Discard task</div>
        <div class="button" id="save">Save task</div>
      </div>
    </div>
    <div class="content">
      <label for="task-name">Task name:</label>
      <div class="inputarea">
        <input type="text" id="task-name" />
      </div>
      <label for="description">Description:</label>
      <div class="inputarea">
        <input type="text" name="description" id="description" />
      </div>
      <label>Deadline:</label>
      <div class="inputarea" id="deadline">
        <input type="datetime-local" name="date" id="date" />
        <p>repeats:</p>
        <input type="checkbox" name="repeats" id="repeats" />
        <p>every:</p>
        <input type="number" name="count" id="count" />
        <select name="period" id="period">
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
        </select>
      </div>
      <label>Points:</label>
      <div class="inputarea">
        <input type="number" name="eap" id="eap" />
      </div>
      <label>Time estimate:</label>
      <div class="inputarea">
        <input type="number" name="hours" id="hours" />
        <p>hours a</p>
        <select name="period" id="period">
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
        </select>
      </div>
      <label>Groupwork:</label>
      <div class="inputarea">
        <input type="checkbox" name="isgroupwork" id="isgroupwork" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
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

    border-bottom: 0.3em solid;
    border-color: gray;

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
