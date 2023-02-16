import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('./pages/HomePage.vue');

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: LoginPage,
  //   meta: {
  //     hideForAuth: true,
  //   },
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: RegisterPage,
  //   meta: {
  //     hideForAuth: true,
  //   },
  // },
  // {
  //   path: '/apartments/:id',
  //   name: 'apartments',
  //   component: ApartmentPage
  // },
  // {
  //   path: '/orders',
  //   name: 'orders',
  //   component: OrdersPage,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'error-page',
  //   component: ErrorPage,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;