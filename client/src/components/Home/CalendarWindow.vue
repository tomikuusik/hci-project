<template>
  <div class="container">
    <h1>Calendar</h1>
    <Calendar />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import { Calendar } from "v-calendar";
import "v-calendar/dist/style.css";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Calendar,
  },
});
</script>
