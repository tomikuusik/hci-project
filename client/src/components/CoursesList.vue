<template>
  <div id="courses-window">
    <h2>Courses</h2>
    <div id="courses-list">
      <p class="course-name">Course 1</p>
      <p class="course-name">Course 2</p>
      <p class="course-name">Course 3</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#courses-window {
  display: grid;

  padding: 2em 1em;
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid lightgray;
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
}
</style>
