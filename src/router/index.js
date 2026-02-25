import AboutPage from '@/pages/AboutPage.vue'
import AttestPage from '@/pages/AttestPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
  },
  {
    path: '/attest',
    name: 'attest',
    component: AttestPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
