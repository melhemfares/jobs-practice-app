import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import JobsList from '../views/JobsList.vue'
import CreateJob from '../views/CreateJob.vue'
import JobDetails from '../views/JobDetails.vue'
import NProgress from 'nprogress'
import store from "@/store"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/jobs',
    name: 'view-jobs',
    component: JobsList,
    beforeEnter: () => {
      if(!store.state.isLoggedIn) {
        router.push({
          name: 'home'
        })
      }
    }
  },
  {
    path: '/jobs/:id',
    name: 'job-details',
    props: true,
    component: JobDetails,
    beforeEnter: () => {
      if(!store.state.isLoggedIn) {
        router.push({
          name: 'home'
        })
      }
    }
  },
  {
    path: '/jobs/create',
    name: 'create-job',
    component: CreateJob,
    beforeEnter: () => {
      if(!store.state.isLoggedIn) {
        router.push({
          name: 'home'
        })
      }
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: HomeView,
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
