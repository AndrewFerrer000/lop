import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/live-reporting',
    name: 'live-reporting',
    component: () => import(/* webpackChunkName: "about" */ '@/views/livereporting/LivereportingPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
