<script setup lang="ts">
import { CheckRound, DeveloperBoardRound, MoreVertOutlined } from '@vicons/material'
import { Settings32Regular } from '@vicons/fluent'

defineProps<{
  title: string
  content?: string
  active?: boolean
}>()
</script>

<template>
  <div class="version-item" :class="{ active: active }">
    <div class="avatar">
      <div class="active-icon">
        <CheckRound />
      </div>
      <slot></slot>
    </div>
    <div class="version">
      <div class="name">{{ title }}</div>
      <div class="type">{{ content }}</div>
    </div>
    <div class="operation-item" alt="测试游戏">
      <DeveloperBoardRound />
    </div>
    <div class="operation-item" alt="版本设置">
      <Settings32Regular />
    </div>
    <div class="operation-item" alt="更多操作">
      <MoreVertOutlined />
    </div>
  </div>
</template>
