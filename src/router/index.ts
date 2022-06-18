import Vue from 'vue';
import VueRouter from 'vue-router';
import liff from '@line/liff';
import Home from '@/views/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
  },
  {
    path: '*',
    name: 'default',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!liff.isLoggedIn()) {
      if (to.path !== '/') {
        next('/');
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
