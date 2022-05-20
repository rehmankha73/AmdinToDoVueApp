import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vue from 'vue';
// export const EventBus = new Vue();

createApp(App).use(VueToast,{
  // One of the options
  position: 'bottom-right',
  dismissible: true,
}).use(store).use(router).mount("#app");
