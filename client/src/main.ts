import { createApp } from "vue";
import SetupCalendar from "v-calendar";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(store).use(router);
app.use(SetupCalendar, {});
app.use(Antd);
app.mount("#app");
