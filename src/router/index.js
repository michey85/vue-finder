import { createRouter, createWebHistory } from 'vue-router';

import InstructorList from '../pages/instructors/InstructorsList.vue';
import InstructorDetail from '../pages/instructors/InstructorDetail.vue';
import InstructorRegistraion from '../pages/instructors/InstructorRegistration.vue';
import ContactInstructor from '../pages/requests/ContactInstructor.vue';
import RequestsRecieved from '../pages/requests/RequestsRecieved.vue';
import NotFound from '../pages/NotFound.vue';

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
  { path: '/register', component: InstructorRegistraion },
  { path: '/requests', component: RequestsRecieved },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
