import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobDetail/:id',
    name: 'jobDetail',
    component: JobDetail,
    props: true,
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchAll
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
