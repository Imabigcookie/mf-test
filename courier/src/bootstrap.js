import Vue from 'vue';

import App from './Courier.vue';

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');