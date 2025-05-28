<script setup lang="ts">
import { BuildOutlined, BugReportOutlined, FolderOpenRound, TuneRound } from '@vicons/material'
import { Settings16Regular, PuzzlePiece16Regular, Earth16Regular } from '@vicons/fluent'
import { useRoute } from 'vue-router'

import SidebarItem from '@/components/SidebarItem.vue'
import type { SidebarItemType } from '@/components/SidebarItem.vue'

const route = useRoute()

const sidebarItems: SidebarItemType[] = [
  {
    icon: Settings16Regular,
    title: '游戏设置',
    path: '/version_settings/game',
  },
  {
    icon: BuildOutlined,
    title: '自动安装',
    path: '/version_settings/install',
  },
  {
    icon: PuzzlePiece16Regular,
    title: '模组管理',
    path: '/version_settings/mods',
  },
  {
    icon: Earth16Regular,
    title: '世界/数据包',
    path: '/version_settings/worlds',
  },
  { divider: true },
  {
    icon: BugReportOutlined,
    title: '测试游戏',
    path: '/version_settings/debug',
  },
  {
    icon: FolderOpenRound,
    title: '浏览',
    path: '/version_settings/browse',
  },
  {
    icon: TuneRound,
    title: '管理',
    path: '/version_settings/manage',
  },
]
</script>

<template>
  <template v-for="(item, idx) in sidebarItems" :key="idx">
    <div v-if="item.divider" class="flex-grow"></div>
    <sidebar-item
      v-else
      v-bind="item"
      :icon="item.icon"
      :title="item.title"
      :active="route.path === item.path"
    />
  </template>
</template>
