import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import IncomePage from '../views/IncomePage.vue';
import ExpensePage from '../views/ExpensePage.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/income',
    name: 'IncomePage',
    component: IncomePage,
  },
  {
    path: '/expense',
    name: 'ExpensePage',
    component: ExpensePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
