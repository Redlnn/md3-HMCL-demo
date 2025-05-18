<script setup lang="ts">
import { useRoute } from 'vue-router'
import { VideogameAssetOutlined, ScatterPlotOutlined } from '@vicons/material'
import { Box24Regular, PuzzlePiece16Regular, Earth16Regular } from '@vicons/fluent'

import SidebarItem from '@/components/SidebarItem.vue'

const route = useRoute()
</script>

<template>
  <sidebar-item
    :icon="VideogameAssetOutlined"
    title="游戏"
    :active="route.path === '/download/game'"
  />
  <sidebar-item
    :icon="Box24Regular"
    title="整合包"
    :active="route.path === '/download/integration'"
  />
  <sidebar-item
    :icon="PuzzlePiece16Regular"
    title="模组"
    :active="route.path === '/download/mods'"
  />
  <sidebar-item
    :icon="ScatterPlotOutlined"
    title="资源包"
    :active="route.path === '/download/resources_pack'"
  />
  <sidebar-item :icon="Earth16Regular" title="存档" :active="route.path === '/download/saves'" />
</template>
