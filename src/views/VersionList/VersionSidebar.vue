<script setup lang="ts">
import {
  FolderOpenRound,
  AddBoxOutlined,
  DownloadOutlined,
  MoveToInboxOutlined,
} from '@vicons/material'
import { Settings16Regular } from '@vicons/fluent'

import SidebarItem from '@/components/SidebarItem.vue'
import type { SidebarItemType } from '@/components/SidebarItem.vue'

const sidebarItems: SidebarItemType[] = [
  {
    icon: FolderOpenRound,
    title: '官方启动器文件夹',
    subtitle: '/hmcl-dev/HMCL/.minecraft',
    active: true,
    activeIcon: true,
    canDelete: true,
  },
  {
    icon: FolderOpenRound,
    title: '测试文件夹',
    subtitle: '/PCL-Community/PCL2-CE/',
    activeIcon: true,
    canDelete: true,
  },
  {
    icon: AddBoxOutlined,
    title: '添加文件夹',
    activeIcon: true,
  },
  // 分隔符
  {
    divider: true,
  },
  {
    icon: DownloadOutlined,
    title: '下载新游戏',
    activeIcon: true,
  },
  {
    icon: MoveToInboxOutlined,
    title: '导入整合包',
    activeIcon: true,
  },
  // {
  //   icon: RefreshRound,
  //   title: '刷新',
  //   activeIcon: true,
  // },
  {
    icon: Settings16Regular,
    title: '全局游戏设置',
    activeIcon: true,
  },
]
</script>

<template>
  <template v-for="(item, idx) in sidebarItems" :key="idx">
    <div v-if="item.divider" class="flex-grow"></div>
    <sidebar-item
      v-else
      :icon="item.icon"
      :title="item.title"
      :subtitle="item.subtitle"
      :active="item.active"
      :active-icon="item.activeIcon"
      :can-delete="item.canDelete"
    />
  </template>
</template>
