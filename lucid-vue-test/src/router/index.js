import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lucid',
      name: 'lucid',
      component: () => import('../views/LucidTests.vue')
    },
    {
      path: '/getstarted',
      name: 'getstarted',
      component: () => import('../views/GettingStarted.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/Components.vue')
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: () => import('../views/Advanced.vue')
    },
    {
      path: '/naptcha',
      name: 'naptcha',
      component: () => import('../views/NaptchaSamples.vue')
    }
  ]
})

export default router
