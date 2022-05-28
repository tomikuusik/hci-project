<template>
  <div>
    <h1>Upcoming deadlines</h1>
    <div class="cover">
      <div class="deadline">
        <p class="datetime">May 12 - 06:00</p>
        <p class="description">HCI - Paper Prototype</p>
      </div>
      <div class="deadline">
        <p class="datetime">May 12 - 06:00</p>
        <p class="description">HCI - Paper Prototype</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
.cover {
  width: 100%;
  display: inline-flex;
  flex-direction: column;

  .deadline {
    margin-left: 2em;
    p {
      width: 100%;
      font-size: small;
    }
    .datetime {
      color: black;
    }
    .description {
      color: gray;
    }
  }
}
</style>
