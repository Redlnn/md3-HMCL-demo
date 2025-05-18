<script setup lang="ts">
import { useRouter } from 'vue-router'

import VersionItem from './components/VersionItem.vue'

const router = useRouter()

function start() {
  window.open('minecraft://', '_self')
}
</script>

<template>
  <section class="version-list">
    <version-item
      title="1.21.5"
      content="1.21.5"
      active
      @start="start"
      @test="start"
      @settings="router.push('/version_settings/game')"
    >
      <img src="/Grass_Block_JE7_BE6.png" />
    </version-item>
    <version-item
      title="fabric-loader-0.16.14-1.21.5"
      content="1.21.5, Fabric: 0.16.4"
      @start="start"
      @test="start"
      @settings="router.push('/version_settings/game')"
    >
      <img src="/fabric.svg" />
    </version-item>
  </section>
</template>

<style lang="scss" scoped>
.version-list {
  position: relative;
  height: 100%;
  padding: 10px 20px 20px 0;
}
</style>
