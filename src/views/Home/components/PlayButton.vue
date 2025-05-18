<script setup lang="ts">
import { Play12Filled } from '@vicons/fluent'
import { KeyboardArrowUpRound } from '@vicons/material'

defineProps<{
  version: string
  onVersionSelect: () => void
}>()
</script>

<template>
  <div class="play-btn">
    <a class="play-btn__container" href="minecraft://">
      <Play12Filled class="play-btn__icon" />
      <div class="play-btn__text flex-grow">
        <p class="play-btn__launch">开始游戏</p>
        <p class="play-btn__version">{{ version }}</p>
      </div>
    </a>
    <div class="play-btn__hr"></div>
    <div class="play-btn__arrow" @click="onVersionSelect">
      <KeyboardArrowUpRound />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.play-btn {
  display: flex;
  align-items: center;
  padding: 0 10px 0 20px;
  width: 220px;
  height: 70px;
  background-color: rgba(var(--mdui-color-primary-container), 0.7);
  color: rgb(var(--mdui-color-on-primary-container));
  border-radius: 20px;
  box-shadow: var(--mdui-elevation-level3);
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(var(--mdui-color-primary-container));
  }

  &__container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  &__icon {
    height: 34px;
    width: 34px;
    margin-right: 10px;
  }
  &__text {
    max-width: 100px;
  }
  &__launch {
    font-size: 18px;
    font-weight: bold;
  }
  &__version {
    font-size: 13px;
    max-width: min-content;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__hr {
    width: 1px;
    height: 30px;
    background-color: rgba(var(--mdui-color-on-primary-container), 0.2);
    margin: 0 10px;
  }
  &__arrow {
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: rgba(var(--mdui-color-on-primary-container), 0.1);
    }
    svg {
      height: 25px;
      color: rgb(var(--mdui-color-on-primary-container));
    }
  }
}
</style>
