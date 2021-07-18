import { createRouter, createWebHashHistory } from 'vue-router';
import Profiles from '../views/Profiles.vue';

const routes = [
  {
    path: '/',
    name: 'Profiles',
    component: Profiles
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
