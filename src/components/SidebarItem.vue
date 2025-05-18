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
    class="sidebar-item"
    :class="[
      active ? 'sidebar-item--active' : '',
      activeIcon ? 'sidebar-item--active-icon' : 'sidebar-item--active-item',
    ]"
  >
    <div class="sidebar-item__icon-container">
      <component :is="icon" class="sidebar-item__icon" />
      <div v-if="active && activeIcon" class="sidebar-item__active-icon">
        <CheckRound />
      </div>
    </div>
    <div class="sidebar-item__content-container">
      <div class="sidebar-item__title">{{ title }}</div>
      <div v-if="content" class="sidebar-item__content">{{ content }}</div>
    </div>
    <div class="sidebar-item__delete" @click="$emit('delete')">
      <CloseRound v-if="canDelete" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 26px;
  height: 45px;
  // margin: 5px 0;
  cursor: pointer;

  &:hover {
    background-color: rgba(var(--mdui-color-surface-container-dark), 0.1);
  }

  &__delete {
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

  &--active.sidebar-item--active-item {
    background-color: rgba(var(--mdui-color-primary-container), 0.8);
    color: rgb(var(--mdui-color-on-primary-container));
    box-shadow: var(--mdui-elevation-level1);
  }
  &--active-icon .sidebar-item__active-icon {
    visibility: visible !important;
  }

  &__content-container {
    width: 131px;
  }
  &__icon-container {
    display: flex;
    justify-content: center;
    width: 30px;
    margin-right: 13px;
    position: relative;
    .sidebar-item__active-icon {
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
  &__icon {
    height: 25px;
  }
  &__title {
    font-size: 14px;
    line-height: 18px;
  }
  &__content {
    font-size: 12px;
    color: rgb(var(--mdui-color-on-surface), 0.5);
    line-height: 14px;
    max-width: 155px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
}
</style>
