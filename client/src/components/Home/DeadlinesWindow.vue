<template>
  <div>
    <h1>Upcoming deadlines</h1>
    <div class="window">
      <a-list
        item-layout="horizontal"
        :data-source="this.$store.getters.upcomingDeadlines"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="item.description">
              <template #title>
                {{ item.deadline }} ({{ item.name }})
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
      <!-- <div
        class="deadline"
        v-for="task in this.$store.getters.upcomingDeadlines"
        :key="task.name"
      >
        <p class="datetime">
          {{ task.deadline === "" ? "DEADLINE" : task.deadline }}
        </p>
        <p class="description">
          {{ task.name === "" ? "TASK NAME" : task.name }}
        </p>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/store/index";
export default defineComponent({});
</script>
<style lang="scss" scoped>
.cover {
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
