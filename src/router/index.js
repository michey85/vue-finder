import { createRouter, createWebHistory } from 'vue-router';

import InstructorList from '../pages/instructors/InstructorsList.vue';
import InstructorDetail from '../pages/instructors/InstructorDetail.vue';
import InstructorRegistraion from '../pages/instructors/InstructorRegistration.vue';
import ContactInstructor from '../pages/requests/ContactInstructor.vue';
import RequestsRecieved from '../pages/requests/RequestsRecieved.vue';
import UserAuth from '../pages/auth/UserAuth.vue';
import NotFound from '../pages/NotFound.vue';

import store from '../store';

const routes = [
  {
    path: '/',
    redirect: '/instructors',
  },
  { path: '/instructors', component: InstructorList },
  {
    path: '/instructors/:id',
    component: InstructorDetail,
    props: true,
    children: [{ path: 'contact', component: ContactInstructor }],
  },
  { path: '/register', component: InstructorRegistraion, meta: {requiresAuth: true} },
  { path: '/requests', component: RequestsRecieved, meta: {requiresAuth: true} },
  { path: '/auth', component: UserAuth, meta: {requiresUnauth: true} },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuth) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuth) {
    next(false);
  } else {
    next();
  }
});

export default router;
