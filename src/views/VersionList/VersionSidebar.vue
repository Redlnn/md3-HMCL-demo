<script setup lang="ts">
import {
  FolderOpenRound,
  AddBoxOutlined,
  DownloadOutlined,
  MoveToInboxOutlined,
  RefreshRound,
} from '@vicons/material'

import SidebarItem from './components/SidebarItem.vue'
</script>

<template>
  <div class="sidebar-container">
    <sidebar-item
      :icon="FolderOpenRound"
      title="官方启动器文件夹"
      content="/hmcl-dev/HMCL/.minecraft"
      active
      can-delete
    />
    <sidebar-item
      :icon="FolderOpenRound"
      title="测试文件夹"
      content="/PCL-Community/PCL2-CE/"
      can-delete
    />
    <sidebar-item :icon="AddBoxOutlined" title="添加文件夹" />
    <div style="flex-grow: 1"></div>
    <sidebar-item :icon="DownloadOutlined" title="下载新游戏" />
    <sidebar-item :icon="MoveToInboxOutlined" title="导入整合包" />
    <sidebar-item :icon="RefreshRound" title="刷新" />
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

:deep(.item-content) {
  .delete {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    color: #000;
    flex-shrink: 0;
  }

  .content-container {
    width: 131px;
  }

  .icon-container {
    position: relative;

    &.active .active-icon {
      visibility: visible;
    }

    .active-icon {
      visibility: hidden;
      position: absolute;
      bottom: -3px;
      right: -3px;
      width: 15px;
      height: 15px;
      background-color: var(--color-primary);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
