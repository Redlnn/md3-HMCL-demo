<script setup lang="ts">
import { PlusRound } from '@vicons/material'

import AccountItem from './components/AccountItem.vue'

const accounts = [
  {
    id: 1,
    title: 'Glavo',
    type: 'Microsoft Account',
    avatar: '/avatarHead3.png',
    active: true,
  },
  {
    id: 2,
    title: 'Glavo',
    type: 'Microsoft Account',
    avatar: '/avatarHead3.png',
  },
  {
    id: 3,
    title: 'Glavo',
    type: 'Microsoft Account',
    avatar: '/avatarHead3.png',
  },
]
</script>

<template>
  <section class="account-list">
    <AccountItem
      v-for="account in accounts"
      :key="account.id"
      v-bind="account"
      @switch="$emit('switch', account.id)"
      @refresh="$emit('refresh', account.id)"
      @change-skin="$emit('changeSkin', account.id)"
      @copy="$emit('copy', account.id)"
      @delete="$emit('delete', account.id)"
      :active="account.active"
    >
      <img :src="account.avatar" alt="Avatar" />
    </AccountItem>

    <div class="add-account-btn">
      <PlusRound />
      <span>添加账号</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.account-list {
  position: relative;
  height: 100%;
  padding: 10px 20px 20px;
}

.add-account-btn {
  position: absolute;
  bottom: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 46px;
  cursor: pointer;
  border-radius: 23px;
  background-color: rgba(var(--mdui-color-primary-container), 0.7);
  box-shadow: var(--mdui-elevation-level2);
  transition: all 0.3s ease;

  svg {
    height: 25px;
    margin-right: 10px;
  }

  span {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
  }

  &:hover {
    background-color: rgb(var(--mdui-color-primary-container));
    color: rgb(var(--mdui-color-on-primary-container));
  }
}
</style>
