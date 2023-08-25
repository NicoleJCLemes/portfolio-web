import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import "./main.css";
import "./assets/css/fonts.css";
import "animate.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
