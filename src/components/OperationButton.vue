<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  tooltip?: string
  danger?: boolean
}>()
</script>

<template>
  <div class="operation-btn" :class="{ 'operation-btn--danger': danger }" :title="tooltip">
    <component :is="icon" />
  </div>
</template>

<style lang="scss" scoped>
.operation-btn {
  margin-left: 5px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(var(--mdui-color-surface-container-lowest));
  }
  &--danger:hover {
    background-color: rgb(var(--mdui-color-error-container));
    color: rgb(var(--mdui-color-on-error-container));
  }
  svg {
    width: 25px;
    height: 25px;
  }
}
</style>
