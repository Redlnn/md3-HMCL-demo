<script setup lang="ts">
import { BugReportOutlined, MoreVertOutlined } from '@vicons/material'
import { Settings16Regular, Play12Filled } from '@vicons/fluent'

import ListItem from '@/components/ListItem.vue'
import OperationButton from '@/components/OperationButton.vue'

defineProps<{
  title: string
  subtitle?: string
  active?: boolean
}>()
</script>

<template>
  <ListItem :title="title" :subtitle="subtitle" :active="active">
    <template #icon>
      <slot></slot>
    </template>
    <template #operations>
      <OperationButton :icon="Play12Filled" tooltip="启动游戏" @click="$emit('start')" />
      <OperationButton :icon="BugReportOutlined" tooltip="测试游戏" @click="$emit('test')" />
      <OperationButton :icon="Settings16Regular" tooltip="版本设置" @click="$emit('settings')" />
      <OperationButton :icon="MoreVertOutlined" tooltip="更多操作" @click="$emit('more')" />
    </template>
  </ListItem>
</template>
