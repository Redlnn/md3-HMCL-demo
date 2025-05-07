<script setup lang="ts">
import { QuestionCircle48Regular, Subtract48Regular, Dismiss48Regular } from '@vicons/fluent'
import { useRoute } from 'vue-router'

import BackBtn from '@/components/BackBtn.vue'

const route = useRoute()

withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Hello Minecraft! Launcher v4.0.0-dev-',
  },
)
</script>

<template>
  <header>
    <div style="display: inline-flex; align-items: center; gap: 10px">
      <span class="icon">
        <img v-if="route.path === '/'" src="/hmcl.png" alt="icon" />
        <back-btn v-else />
      </span>
      <span class="title">{{ title }}</span>
    </div>
    <div class="controls">
      <span>
        <QuestionCircle48Regular />
      </span>
      <span>
        <Subtract48Regular />
      </span>
      <span>
        <Dismiss48Regular />
      </span>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 6px;

  .icon,
  .icon img,
  .icon svg {
    height: 30px;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    color: var(--color-on-surface);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      svg {
        width: 20px;
        height: 20px;
        color: var(--color-on-surface);
      }
      cursor: pointer;
    }
  }
}
</style>
