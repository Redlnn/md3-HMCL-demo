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
    title: 'Hello Minecraft! Launcher',
  },
)
</script>

<template>
  <header class="hmcl-header">
    <div class="hmcl-header__left" style="margin: auto 0">
      <transition name="slide-fade">
        <div class="hmcl-header__row" :key="title">
          <span class="hmcl-header__icon">
            <img v-if="route.path === '/'" src="/hmcl.png" alt="icon" />
            <back-btn v-else />
          </span>
          <span class="hmcl-header__title">{{ title }}</span>
        </div>
      </transition>
    </div>
    <div class="hmcl-header__controls">
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
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* 离开动画 */
.slide-fade-leave-active {
  transition: all 0.2s ease;
  position: absolute;
}
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.hmcl-header__row {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hmcl-header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 6px;

  .hmcl-header__icon,
  .hmcl-header__icon img,
  .hmcl-header__icon svg {
    height: 25px;
  }
  .hmcl-header__title {
    font-size: 16px;
    font-weight: bold;
  }
  .hmcl-header__controls {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      svg {
        width: 20px;
        height: 20px;
      }
      cursor: pointer;
    }
  }
}
</style>
