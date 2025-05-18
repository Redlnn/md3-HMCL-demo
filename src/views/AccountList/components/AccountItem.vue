<script setup lang="ts">
import {
  CompareArrowsRound,
  RefreshRound,
  CheckroomRound,
  ContentCopyRound,
  DeleteOutlineRound,
} from '@vicons/material'

import ListItem from '@/components/ListItem.vue'
import OperationButton from '@/components/OperationButton.vue'

defineProps<{
  title: string
  type?: string
  active?: boolean
}>()
</script>

<template>
  <ListItem :title="title" :subtitle="type" :active="active">
    <template #icon>
      <slot></slot>
    </template>
    <template #operations>
      <OperationButton :icon="CompareArrowsRound" tooltip="切换账号" @click="$emit('switch')" />
      <OperationButton :icon="RefreshRound" tooltip="刷新账号" @click="$emit('refresh')" />
      <OperationButton :icon="CheckroomRound" tooltip="更换皮肤" @click="$emit('changeSkin')" />
      <OperationButton :icon="ContentCopyRound" tooltip="复制账号" @click="$emit('copy')" />
      <OperationButton
        :icon="DeleteOutlineRound"
        tooltip="删除账号"
        danger
        @click="$emit('delete')"
      />
    </template>
  </ListItem>
</template>
