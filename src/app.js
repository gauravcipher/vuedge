// This is to run the project in any html file or project with id #app
import { createApp } from "vue";
import App from "./App.vue";
import plugin from "./plugin";

const app = createApp(App);

app.use(plugin /* can pass options as second param */);

app.mount("#app");
