<template>
  <div>
    <h1>Upcoming deadlines</h1>
    <div class="cover">
      <div
        class="deadline"
        v-for="task in this.$store.getters.upcomingDeadlines"
        :key="task.name"
      >
        <p class="datetime">{{ task.deadline }}</p>
        <p class="description">{{ task.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    upcomingDeadlines() {
      return this.$store.getters.upcomingDeadlines;
    },
  },
});
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
