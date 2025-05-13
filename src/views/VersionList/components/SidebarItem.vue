<script setup lang="ts">
import { CheckRound, CloseRound } from '@vicons/material'
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  content?: string
  active?: boolean
  canDelete?: boolean
}>()
</script>

<template>
  <div class="item-content">
    <span class="icon-container" :class="{ active: active }">
      <component :is="icon" class="icon" />
      <div class="active-icon">
        <CheckRound />
      </div>
    </span>
    <div class="content-container">
      <div class="title">{{ title }}</div>
      <div v-if="content" class="content">{{ content }}</div>
    </div>
    <CloseRound v-if="canDelete" class="delete" />
  </div>
</template>
