import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin.js'


const routes = [...admin]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// import HomeView from '../views/HomeView.vue'