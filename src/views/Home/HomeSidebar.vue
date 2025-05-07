<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { TextBulletListLtr16Filled, Settings16Regular, ChatMultiple24Regular } from '@vicons/fluent'
import { CloudDownloadOutlined } from '@vicons/material'
</script>

<template>
  <router-link to="/account" class="player-info">
    <img src="/avatarHead3.png" alt="avatar" class="avatar" />
    <div>
      <div class="name">Glavo</div>
      <div class="type">Microsoft Account</div>
    </div>
  </router-link>
  <div class="hr"></div>
  <div class="item-content">
    <span class="icon-container">
      <img src="/fabric.svg" alt="icon" class="icon" style="height: 32px" />
    </span>
    <div>
      <div class="title">版本管理</div>
      <div class="content">fabric-loader-0.16.14-1.21.5</div>
    </div>
  </div>
  <div class="item">
    <span class="icon-container">
      <TextBulletListLtr16Filled class="icon" />
    </span>
    <div>
      <div class="title">版本列表</div>
    </div>
  </div>
  <div class="item">
    <span class="icon-container">
      <CloudDownloadOutlined class="icon" />
    </span>
    <div>
      <div class="title">下载</div>
    </div>
  </div>
  <div class="hr"></div>
  <div class="item">
    <span class="icon-container">
      <Settings16Regular class="icon" />
    </span>
    <div>
      <div class="title">设置</div>
    </div>
  </div>
  <div class="item">
    <span class="icon-container">
      <ChatMultiple24Regular class="icon" />
    </span>
    <div>
      <div class="title">官方群组</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.player-info {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 5px;
  background-color: color-mix(in srgb, var(--color-surface-container), transparent 50%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, var(--color-surface-container), transparent 10%);
  }

  .avatar {
    height: 32px;
    margin-right: 1rem;
  }

  .name {
    font-weight: bold;
    line-height: 18px;
  }

  .type {
    font-size: 12px;
    color: color-mix(in srgb, var(--color-on-surface), transparent 50%);
    line-height: 14px;
  }
}
</style>
