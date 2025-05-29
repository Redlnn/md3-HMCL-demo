<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'

import HmclHeader from '@/components/HmclHeader.vue'
import HmclSidebar from '@/components/HmclSidebar.vue'

const route = useRoute()

defineProps<{
  bgUrl: string
}>()
</script>

<template>
  <div class="bg" :style="{ backgroundImage: `url(${bgUrl})` }"></div>
  <div class="bg-mask"></div>
  <hmcl-header :title="route.meta.title" />
  <transition name="fade" mode="out-in">
    <div class="content-container" :key="route.path">
      <hmcl-sidebar v-if="route.meta.sidebar">
        <component :is="route.meta.sidebar" />
      </hmcl-sidebar>
      <main
        class="main-content"
        :style="{ width: route.meta.sidebar ? 'calc(100% - 270px)' : '100%' }"
      >
        <router-view />
      </main>
    </div>
  </transition>
</template>

<style scoped lang="scss">
// 动画相关
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 布局相关
.content-container {
  width: 100%;
  height: calc(100% - 50px);
}

.main-content {
  display: inline-block;
  height: 100%;
  vertical-align: top;
}

// 背景样式
.bg {
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(var(--mdui-color-surface));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1px) brightness(1.05);
  transform: scale(1.1);
}

.bg-mask {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--mdui-color-surface), 0.7);
}
</style>
