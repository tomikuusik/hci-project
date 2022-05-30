import { createApp } from "vue";
import SetupCalendar from "v-calendar";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
} from "ant-design-vue";

const app = createApp(App);

app.use(store).use(router);
app.use(SetupCalendar, {});
app.mount("#app");
