<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  items: {
    icon: Component
    text: string
    to?: string
  }[]
}>()
</script>

<template>
  <div class="action-btn-group">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.to || ''"
      class="action-btn-group__btn"
    >
      <component :is="item.icon" class="action-btn-group__icon" />
      <span class="action-btn-group__text">{{ item.text }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.action-btn-group {
  display: flex;
  align-items: center;
  border-radius: 20px;
  box-shadow: var(--mdui-elevation-level3);
  overflow: hidden;
  height: 70px;
  background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.6);

  &__btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.8);
    }
  }
  &__icon {
    height: 25px;
    margin-bottom: 3px;
  }
  &__text {
    color: color-mix(in srgb, var(--color-on-surface), transparent 50%);
    font-size: 13px;
  }
}
</style>
