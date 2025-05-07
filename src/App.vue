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
  <div style="width: 100%; height: calc(100% - 50px); padding: 10px 20px 20px">
    <hmcl-sidebar v-if="route.meta.sidebar">
      <component :is="route.meta.sidebar" />
    </hmcl-sidebar>
    <main
      style="display: inline-block; height: 100%; vertical-align: top"
      :style="{ width: route.meta.sidebar ? 'calc(100% - 250px)' : '100%' }"
    >
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
.bg {
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-surface);
  // background-image: url(./2017-01-19_22.25.09.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px) brightness(1.1);
  transform: scale(1.1);
}

.bg-mask {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: color-mix(in srgb, var(--color-surface), transparent 50%);
}
</style>
