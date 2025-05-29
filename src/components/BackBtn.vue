<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import { ArrowBackRound } from '@vicons/material'

const route = useRoute()
const router = useRouter()
const goBack = () => {
  const segments = route.path.split('/').filter(Boolean)
  segments.pop()
  const parentPath = '/' + segments.join('/')
  router.push(parentPath || '/')
}
</script>

<template>
  <ArrowBackRound @click="goBack" class="back-btn--pointer" />
</template>

<style scoped>
.back-btn--pointer {
  cursor: pointer;
}
</style>
