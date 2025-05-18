<script setup lang="ts">
defineProps<{
  name: string
  type: string
  icon: string
  active?: boolean
}>()
import { CheckRound } from '@vicons/material'
</script>

<template>
  <div class="version-item" :class="{ active }">
    <div class="version-icon">
      <div v-if="active" class="active-icon">
        <CheckRound />
      </div>
      <img :src="icon" />
    </div>
    <div class="version">
      <div class="name">{{ name }}</div>
      <div class="type">{{ type }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.version-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(var(--mdui-color-primary-container), 0.8);
  }

  &.active .active-icon {
    visibility: visible !important;
  }

  .version-icon {
    position: relative;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }

    .active-icon {
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

  .version {
    margin-left: 15px;

    .name {
      font-weight: bold;
      line-height: 16px;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .type {
      font-size: 12px;
      color: color-mix(in srgb, var(--color-on-surface), transparent 50%);
      line-height: 12px;
    }
  }
}
</style>
