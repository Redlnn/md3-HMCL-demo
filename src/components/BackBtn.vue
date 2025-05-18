<script setup lang="ts">
import { useRouter } from 'vue-router'

import { ArrowBackRound } from '@vicons/material'

const router = useRouter()
const goBack = () => {
  router.back()
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
