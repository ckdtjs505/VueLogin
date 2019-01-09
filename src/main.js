import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  PulseLoader,
  render: h => h(App)
}).$mount("#app");
