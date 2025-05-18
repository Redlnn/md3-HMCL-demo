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
  <div class="version-card" :class="{ 'version-card--active': active }">
    <div class="version-card__icon">
      <div v-if="active" class="version-card__active-icon">
        <CheckRound />
      </div>
      <img :src="icon" />
    </div>
    <div class="version-card__info">
      <div class="version-card__name">{{ name }}</div>
      <div class="version-card__type">{{ type }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.version-card {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(var(--mdui-color-primary-container), 0.8);
  }

  &--active .version-card__active-icon {
    visibility: visible !important;
  }

  &__icon {
    position: relative;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }

    .version-card__active-icon {
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

  &__info {
    margin-left: 15px;
  }
  &__name {
    font-weight: bold;
    line-height: 16px;
    font-size: 16px;
    margin-bottom: 2px;
  }
  &__type {
    font-size: 12px;
    color: color-mix(in srgb, var(--color-on-surface), transparent 50%);
    line-height: 12px;
  }
}
</style>
