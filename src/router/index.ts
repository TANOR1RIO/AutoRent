import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import CarView from '@/views/CarView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AuthView from '@/views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/car/:id',
      name: 'car',
      component: CarView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
  ],
})

export default router