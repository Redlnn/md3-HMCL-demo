<script setup lang="ts">
import { CheckRound } from '@vicons/material'

defineProps<{
  title: string
  subtitle?: string
  active?: boolean
}>()
</script>

<template>
  <div class="list-item" :class="{ 'list-item--active': active }">
    <div v-if="$slots.icon" class="list-item__icon">
      <div v-if="active" class="list-item__active-icon">
        <CheckRound />
      </div>
      <slot name="icon"></slot>
    </div>
    <div class="list-item__title-container flex-grow">
      <div class="list-item__title">{{ title }}</div>
      <div v-if="subtitle" class="list-item__subtitle">{{ subtitle }}</div>
    </div>
    <div class="list-item__operations">
      <slot name="operations"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: rgba(var(--mdui-color-surface-container-dark), 0.1);
  }

  &--active .list-item__icon .list-item__active-icon {
    visibility: visible;
  }

  &__icon {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background-color: rgb(var(--mdui-color-surface-container));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(img) {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }

    .list-item__active-icon {
      visibility: hidden;
      position: absolute;
      bottom: 0;
      right: 0;
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

  &__title-container {
    min-width: 0;
  }
  &__title {
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__subtitle {
    font-size: 13px;
    color: rgba(var(--mdui-color-on-surface), 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__operations {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}
</style>
