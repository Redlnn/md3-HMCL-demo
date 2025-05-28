<script setup lang="ts">
import { DeleteOutlineRound, FolderOpenRound, InfoOutlined } from '@vicons/material'

import ListItem from '@/components/ListItem.vue'
import OperationButton from '@/components/OperationButton.vue'

defineProps<{
  name: string
  desc?: string
}>()
</script>

<template>
  <ListItem :title="name" :subtitle="desc">
    <template #icon>
      <mdui-switch checked checked-icon="" style="transform: scale(0.85)"></mdui-switch>
    </template>
    <template #operations>
      <OperationButton :icon="FolderOpenRound" tooltip="打开所在位置" />
      <OperationButton :icon="InfoOutlined" tooltip="查看详情" />
      <OperationButton :icon="DeleteOutlineRound" tooltip="删除" danger />
    </template>
  </ListItem>
</template>
