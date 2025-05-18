import { createRouter, createWebHistory } from 'vue-router'
import type { Component } from 'vue'

import HomeView from '@/views/Home/HomeView.vue'
import VersionSidebar from '@/views/VersionList/VersionSidebar.vue'
import DownloadSidebar from '@/views/Download/DownloadSidebar.vue'
import VersionSettingsSidebar from '@/views/VersionSettings/VersionSettingsSidebar.vue'

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
    },
    {
      path: '/account_list',
      name: 'accountList',
      component: () => import('@/views/AccountList/AccountView.vue'),
      meta: {
        title: '账户列表',
      },
    },
    {
      path: '/download',
      children: [
        {
          path: 'game',
          component: () => import('@/views/Download/Game/GameDownloadView.vue'),
        },
      ],
      meta: {
        sidebar: DownloadSidebar,
        title: '下载',
      },
    },
    {
      path: '/version_list',
      name: 'versionList',
      component: () => import('@/views/VersionList/VersionView.vue'),
      meta: {
        title: '版本管理',
        sidebar: VersionSidebar,
      },
    },
    {
      path: '/version_settings',
      name: 'versionSettings',
      children: [
        {
          path: 'game',
          component: () => import('@/views/VersionSettings/Game/GameSettingsView.vue'),
        },
      ],
      meta: {
        title: '版本设置',
        sidebar: VersionSettingsSidebar,
      },
    },
  ],
})

export default router
