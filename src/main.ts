import { createApp } from "vue";
import App from "@/App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "@/router";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Notifications from "vue-notification";

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);

// import VModal from "vue-js-modal";

createApp(App)
  .use(VueSweetalert2)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
