<script setup lang="ts">
import { BuildOutlined, BugReportOutlined, FolderOpenRound, TuneRound } from '@vicons/material'
import { Settings16Regular, PuzzlePiece16Regular, Earth16Regular } from '@vicons/fluent'
import { useRoute } from 'vue-router'

import SidebarItem from '@/components/SidebarItem.vue'

const route = useRoute()
</script>

<template>
  <sidebar-item
    :icon="Settings16Regular"
    :active="route.path === '/version_settings/game'"
    title="游戏设置"
  />
  <sidebar-item
    :icon="BuildOutlined"
    :active="route.path === '/version_settings/install'"
    title="自动安装"
  />
  <sidebar-item
    :icon="PuzzlePiece16Regular"
    :active="route.path === '/version_settings/mods'"
    title="模组管理"
  />
  <sidebar-item
    :icon="Earth16Regular"
    :active="route.path === '/version_settings/worlds'"
    title="世界/数据包"
  />
  <div class="flex-grow-1"></div>
  <sidebar-item
    :icon="BugReportOutlined"
    :active="route.path === '/version_settings/debug'"
    title="测试游戏"
  />
  <sidebar-item
    :icon="FolderOpenRound"
    :active="route.path === '/version_settings/browse'"
    title="浏览"
  />
  <sidebar-item
    :icon="TuneRound"
    :active="route.path === '/version_settings/manage'"
    title="管理"
  />
</template>
