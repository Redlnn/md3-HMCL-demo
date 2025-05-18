<script setup lang="ts">
defineProps<{
  name: string
  type: string
  avatar: string
}>()
</script>

<template>
  <div class="user-info">
    <img :src="avatar" class="user-info__avatar" alt="User Avatar" />
    <div class="user-info__info">
      <div class="user-info__name">{{ name }}</div>
      <div class="user-info__type">{{ type }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  padding: 19px 20px;
  margin-right: 10px;
  background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.6);
  border-radius: 20px;
  box-shadow: var(--mdui-elevation-level3);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.8);
  }

  &__avatar {
    height: 32px;
    margin-right: 13px;
  }
  &__name {
    font-weight: bold;
    line-height: 18px;
    font-size: 18px;
  }
  &__type {
    font-size: 12px;
    color: rgba(var(--mdui-color-on-surface), 0.5);
    line-height: 14px;
  }
}
</style>
