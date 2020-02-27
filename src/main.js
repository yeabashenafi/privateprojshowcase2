import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import pdfkit from "./"
import vuetify from "./plugins/vuetify";
// import Vuetify from 'vuetify/lib'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
