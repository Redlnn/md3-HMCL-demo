import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import HomeSidebar from '@/views/Home/HomeSidebar.vue'
import type { Component } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    sidebar?: Component
    title?: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        sidebar: HomeSidebar,
      },
    },
    {
      path: '/account',
      name: 'accountList',
      component: () => import('@/views/AccountList/AccountView.vue'),
      meta: {
        title: '账户列表',
      },
    },
  ],
})

export default router
