<script setup lang="ts">
import {
  CheckRound,
  CompareArrowsRound,
  RefreshRound,
  CheckroomRound,
  ContentCopyRound,
  DeleteOutlineRound,
} from '@vicons/material'

defineProps<{
  title: string
  type?: string
  active?: boolean
}>()
</script>

<template>
  <div class="account-item" :class="{ active: active }">
    <div class="avatar">
      <div class="active-icon">
        <CheckRound />
      </div>
      <slot></slot>
    </div>
    <div class="account">
      <div class="name">{{ title }}</div>
      <div class="type">{{ type }}</div>
    </div>
    <div class="operation-item">
      <CompareArrowsRound />
    </div>
    <div class="operation-item">
      <RefreshRound />
    </div>
    <div class="operation-item">
      <CheckroomRound />
    </div>
    <div class="operation-item">
      <ContentCopyRound />
    </div>
    <div class="operation-item delete">
      <DeleteOutlineRound />
    </div>
  </div>
</template>
