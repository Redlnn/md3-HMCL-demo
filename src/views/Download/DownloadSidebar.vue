<script setup lang="ts">
import { useRoute } from 'vue-router'
import { VideogameAssetOutlined, ScatterPlotOutlined } from '@vicons/material'
import { Box24Regular, PuzzlePiece16Regular, Earth16Regular } from '@vicons/fluent'

import SidebarItem from './components/SidebarItem.vue'

const route = useRoute()
console.log(route)
</script>

<template>
  <section class="download-sidebar">
    <div class="sidebar-container">
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
      <sidebar-item
        :icon="Earth16Regular"
        title="存档"
        :active="route.path === '/download/saves'"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 0 20px 20px;
}

:deep(.item-content) {
  .content-container {
    width: 131px;
  }

  .icon-container {
    position: relative;
  }

  &.active {
    background-color: var(--color-primary-container);
    color: var(--color-on-primary-container);
  }
}
</style>
