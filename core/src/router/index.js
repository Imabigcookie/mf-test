import Router from 'vue-router';
import App from '../App.vue'
import Layout from '../Layout.vue'

export const routerConfig = {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: Layout,
        },
      ],
    },
  ],
}

const router = new Router(routerConfig);

export default router;