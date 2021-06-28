import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    redirect: '/instructors'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {path: '/instructors', component: null},
  {path: '/instructors/:id', component: null, children: [
    {path: '/contact', component: null},
  ]},
  {path: '/register', component: null},
  {path: '/requests', component: null},
  {path: '/:notFound(.*)', component: null},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
