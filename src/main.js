import Vue from 'vue';
import App from './App.vue';
import DashboardPlugin from "./plugins/material-dashboard.js"

Vue.use(DashboardPlugin)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
