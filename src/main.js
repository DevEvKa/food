import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueKinesis from "vue-kinesis";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(VueKinesis);

app.mount("#app");
