<script setup lang="ts">
import { useRouter } from 'vue-router'

import { ArrowCircleLeft12Regular } from '@vicons/fluent'

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <ArrowCircleLeft12Regular @click="goBack" style="cursor: pointer" />
</template>
