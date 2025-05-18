<script setup lang="ts">
import {
  FolderOpenRound,
  AddBoxOutlined,
  DownloadOutlined,
  MoveToInboxOutlined,
} from '@vicons/material'
import { Settings16Regular } from '@vicons/fluent'

import SidebarItem from '@/components/SidebarItem.vue'
</script>

<template>
  <div class="sidebar-container">
    <sidebar-item
      :icon="FolderOpenRound"
      title="官方启动器文件夹"
      content="/hmcl-dev/HMCL/.minecraft"
      active
      active-icon
      can-delete
    />
    <sidebar-item
      :icon="FolderOpenRound"
      title="测试文件夹"
      content="/PCL-Community/PCL2-CE/"
      active-icon
      can-delete
    />
    <sidebar-item :icon="AddBoxOutlined" active-icon title="添加文件夹" />
    <div style="flex-grow: 1"></div>
    <sidebar-item :icon="DownloadOutlined" active-icon title="下载新游戏" />
    <sidebar-item :icon="MoveToInboxOutlined" active-icon title="导入整合包" />
    <!-- 为什么不把手动刷新做成定时刷新呢？ -->
    <!-- <sidebar-item :icon="RefreshRound" active-icon title="刷新" /> -->
    <sidebar-item :icon="Settings16Regular" active-icon title="全局游戏设置" />
  </div>
</template>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 0 20px 20px;
}
</style>
