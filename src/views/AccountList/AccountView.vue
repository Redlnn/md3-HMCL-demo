<script setup lang="ts">
//MoreVertOutlined
import { PlusRound } from '@vicons/material'

import AccountItem from './components/AccountItem.vue'
</script>

<template>
  <section class="account-list">
    <account-item title="Glavo" type="Microsoft Account" active>
      <img src="/avatarHead3.png" alt="Avatar" />
    </account-item>
    <account-item title="Glavo" type="Microsoft Account">
      <img src="/avatarHead3.png" alt="Avatar" />
    </account-item>
    <account-item title="Glavo" type="Microsoft Account">
      <img src="/avatarHead3.png" alt="Avatar" />
    </account-item>
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
    box-shadow: 0 2px 5px color-mix(in srgb, #666, transparent 80%);

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
}

:deep(.account-item) {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: rgb(var(--mdui-color-primary-container), 0.8);
  }

  &.active .active-icon {
    visibility: visible;
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

  .avatar {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background-color: rgb(var(--mdui-color-surface-container));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .account {
    flex-grow: 1;

    .name {
      font-size: 16px;
      font-weight: bold;
    }

    .type {
      font-size: 13px;
      color: #666;
    }
  }

  .operation-item {
    margin-left: 5px;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(var(--mdui-color-surface-container-lowest));
    }

    &:hover.delete {
      color: rgb(var(--mdui-color-error));
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
