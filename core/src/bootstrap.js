import Vue from 'vue';
import VueRouter from 'vue-router';

import Ant from 'ant-design-vue';

import App from './App.vue';
import router from './router';

// import 'ant-design-vue/dist/antd.css';

Vue.use(Ant);
Vue.use(VueRouter);

const app = new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app');