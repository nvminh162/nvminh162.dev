import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/cv', component: () => import('./views/CvView.vue') },
]

const router = createRouter({
  history: createWebHistory('/nvminh162.dev/'),
  routes,
})

export default router