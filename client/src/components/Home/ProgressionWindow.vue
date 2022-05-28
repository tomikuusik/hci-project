<template>
  <div class="container">
    <h1>Progression</h1>
    <div class="cover">
      <div class="metrics">
        <p class="description">HCI</p>
        <div class="progressbar">
          <div class="total"></div>
          <div class="progress"></div>
        </div>
      </div>
      <div class="metrics">
        <p class="description">Sysadmin</p>
        <div class="progressbar">
          <div class="total"></div>
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.metrics {
  padding: 0 5%;
  .description {
    color: black;
    font-size: small;
  }

  * {
    width: 100%;
    height: 1em;
  }
  .progressbar {
    position: relative;
    * {
      left: 0;
      top: 0;
    }
    .total {
      position: absolute;
      background-color: lightgray;
    }
    .progress {
      position: absolute;
      background-color: lightgreen;
      width: 65%;
    }
  }
}
</style>
