<script setup lang="ts">
import { useRoute } from 'vue-router'
import { VideogameAssetOutlined, ScatterPlotOutlined } from '@vicons/material'
import { Box24Regular, PuzzlePiece16Regular, Earth16Regular } from '@vicons/fluent'

import SidebarItem from '@/components/SidebarItem.vue'
import type { SidebarItemType } from '@/components/SidebarItem.vue'

const route = useRoute()

const sidebarItems: SidebarItemType[] = [
  {
    icon: VideogameAssetOutlined,
    title: '游戏',
    path: '/download/game',
  },
  {
    icon: Box24Regular,
    title: '整合包',
    path: '/download/integration',
  },
  {
    icon: PuzzlePiece16Regular,
    title: '模组',
    path: '/download/mods',
  },
  {
    icon: ScatterPlotOutlined,
    title: '资源包',
    path: '/download/resources_pack',
  },
  {
    icon: Earth16Regular,
    title: '存档',
    path: '/download/saves',
  },
]
</script>

<template>
  <sidebar-item
    v-for="item in sidebarItems"
    :key="item.path"
    :icon="item.icon"
    :title="item.title"
    :active="route.path === item.path"
  />
</template>
