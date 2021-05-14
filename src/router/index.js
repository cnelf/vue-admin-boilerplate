import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const constantRoutes = [
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/home')
  },

  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login')
  }
];

const createRouter = () => new Router({
  // mode: 'history', // 需要服务端支持
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
