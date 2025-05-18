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
    <a class="play-btn-container" href="minecraft://">
      <Play12Filled class="play-icon" />
      <div class="play-btn-text">
        <p class="launch">开始游戏</p>
        <p class="version">{{ version }}</p>
      </div>
    </a>
    <div class="hr"></div>
    <div class="arrow" @click="onVersionSelect">
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

  .play-btn-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  .play-icon {
    height: 34px;
    width: 34px;
    margin-right: 10px;
  }

  .play-btn-text {
    max-width: 100px;
    flex: 1;
  }

  .launch {
    font-size: 18px;
    font-weight: bold;
  }

  .version {
    font-size: 13px;
    max-width: min-content;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .hr {
    width: 1px;
    height: 30px;
    background-color: rgba(var(--mdui-color-on-primary-container), 0.2);
    margin: 0 10px;
  }

  .arrow {
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
