import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/data',
    component: () => import('@/pages/Datas/index')
  },{
    path: '/model',
    component: () => import('@/pages/Models/index')
  },{
    path: '/canvas/:id',
    component: () => import('@/pages/Canvas/index')
  },,{
    path: '/struct',
    component: () => import('@/pages/Structure/index')
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes,
})

export default router
