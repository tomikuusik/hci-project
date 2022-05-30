<template>
  <div class="container">
    <h1>Progression</h1>
    <div class="window">
      <div
        class="metrics"
        v-for="course in this.$store.state.courses"
        :key="course.name"
      >
        <p class="description">{{ course.name }}</p>
        <a-progress
          :percent="course.progress"
          :strokeWidth="10"
          :strokeColor="getColor(course.progress)"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import KProgress from "k-progress-v3";

export default defineComponent({
  components: {
    // KProgress,
  },
  methods: {
    getColor(points: number): string {
      if (points > 50) {
        return "lightgreen";
      } else if (points > 25) {
        return "yellow";
      } else {
        return "red";
      }
    },
  },
});
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
      width: 0%;
    }
  }
}
</style>
