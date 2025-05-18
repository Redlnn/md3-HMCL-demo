<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    padding?: string
    elevation?: 1 | 2 | 3 | 4 | 5
  }>(),
  {
    padding: '16px',
    elevation: 2,
  },
)
</script>

<template>
  <div
    class="card"
    :style="{
      padding,
      '--card-elevation': `var(--mdui-elevation-level${elevation})`,
    }"
  >
    <div v-if="title" class="card-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgb(var(--mdui-color-surface-container));
  border-radius: 15px;
  box-shadow: var(--card-elevation);

  .card-title {
    font-weight: bold;
  }
}
</style>
