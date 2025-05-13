<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'

import HmclHeader from '@/components/HmclHeader.vue'
import HmclSidebar from '@/components/HmclSidebar.vue'

const route = useRoute()
</script>

<template>
  <div class="bg"></div>
  <div class="bg-mask"></div>
  <hmcl-header :title="route.meta.title"></hmcl-header>
  <transition name="fade" mode="out-in">
    <div style="width: 100%; height: calc(100% - 50px)" :key="route.path">
      <hmcl-sidebar v-if="route.meta.sidebar">
        <component :is="route.meta.sidebar" />
      </hmcl-sidebar>
      <main
        style="display: inline-block; height: 100%; vertical-align: top"
        :style="{ width: route.meta.sidebar ? 'calc(100% - 270px)' : '100%' }"
      >
        <router-view />
      </main>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bg {
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(var(--mdui-color-surface));
  background-image: url('/2017-01-19_22.25.09.png');
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
  background-color: rgba(var(--mdui-color-surface), 0.5);
}
</style>
