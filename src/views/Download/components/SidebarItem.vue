<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  content?: string
  active?: boolean
}>()
</script>

<template>
  <div class="item-content" :class="{ active: active }">
    <span class="icon-container">
      <component :is="icon" class="icon" />
    </span>
    <div class="content-container">
      <div class="title">{{ title }}</div>
      <div v-if="content" class="content">{{ content }}</div>
    </div>
  </div>
</template>
