import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/progreso', name: 'progreso', component: () => import('../views/ProgresoView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Siempre hacer scroll al inicio cuando cambias de ruta
    return { top: 0, behavior: 'smooth' };
  }
})

export default router