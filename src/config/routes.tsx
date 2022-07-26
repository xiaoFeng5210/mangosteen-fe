import { createRouter, createWebHashHistory } from 'vue-router'
import { Foo } from '../views/Foo';
import { Bar } from '../views/Bar';

const routes = [
    { path: '/', component: Foo },
    { path: '/about', component: Bar }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})