import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
  {
    path: "/welcome",
    component: Foo,
    children: [
      { path: "/1", component: Foo },
      { path: "/2", component: Foo },
      { path: "/3", component: Foo },
      { path: "/4", component: Foo },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
