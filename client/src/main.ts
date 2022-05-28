import { createApp } from "vue";
import SetupCalendar from "v-calendar";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(store).use(router);
app.use(SetupCalendar, {});
app.mount("#app");
