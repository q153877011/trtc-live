import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home.vue'),
  },
  {
    name: 'live',
    path: '/live',
    component: () => import('@/views/live.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name === from.name && to.params === from.params) {
    // Disable return if current route is the same as previous route
    next(false);
  } else {
    next();
  }
});
export default router;
