<script setup lang="ts">
import { CheckRound, CloseRound } from '@vicons/material'
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  content?: string
  active?: boolean
  activeIcon?: boolean
  canDelete?: boolean
}>()
</script>

<template>
  <div
    class="item-content"
    :class="[active ? 'active' : '', , activeIcon ? 'hightlight__icon' : 'hightlight__item']"
  >
    <div class="icon-container">
      <component :is="icon" class="icon" />
      <div v-if="active && activeIcon" class="active-icon">
        <CheckRound />
      </div>
    </div>
    <div class="content-container">
      <div class="title">{{ title }}</div>
      <div v-if="content" class="content">{{ content }}</div>
    </div>
    <div class="delete" @click="$emit('delete')">
      <CloseRound v-if="canDelete" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-content {
  .delete {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    color: #000;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgb(var(--mdui-color-surface-container-lowest));
    }

    svg {
      height: 16px;
    }
  }

  &.active.hightlight__item {
    background-color: rgba(var(--mdui-color-primary-container), 0.8);
    color: rgb(var(--mdui-color-on-primary-container));
    box-shadow: var(--mdui-elevation-level1);
  }

  &.active.hightlight__icon .active-icon {
    visibility: visible !important;
  }

  .content-container {
    width: 131px;
  }

  .icon-container {
    position: relative;

    .active-icon {
      visibility: hidden;
      position: absolute;
      bottom: -3px;
      right: -3px;
      width: 15px;
      height: 15px;
      background-color: rgb(var(--mdui-color-primary));
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
