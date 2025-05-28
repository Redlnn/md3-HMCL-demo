<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import OperationButton from '@/components/OperationButton.vue'

import { DeleteOutlineRound, PlusRound } from '@vicons/material'
</script>

<template>
  <div class="auto-install-list">
    <list-item title="从本地文件安装/升级" subtitle="从现有的Forge/Optifine的jar或exe安装器安装">
      <template #icon>
        <PlusRound />
      </template>
    </list-item>
    <list-item title="Minecraft" subtitle="已安装：1.12.5">
      <template #icon>
        <img src="/Grass_Block_JE7_BE6.png" />
      </template>
    </list-item>
    <list-item title="NeoForge" subtitle="与Fabric不兼容">
      <template #icon>
        <img src="/neoforge.png" />
      </template>
    </list-item>
    <list-item title="Optifine" subtitle="与Fabric不兼容">
      <template #icon>
        <img src="/optifine.png" />
      </template>
    </list-item>
    <list-item title="Fabric" subtitle="已安装：0.16.14（由外部安装器安装，无法卸载或更换）">
      <template #icon>
        <img src="/fabric.svg" />
      </template>
      <template #operations>
        <OperationButton
          :icon="DeleteOutlineRound"
          tooltip="删除账号"
          danger
          @click="$emit('delete')"
        />
      </template>
    </list-item>
    <list-item title="Quilt" subtitle="与Fabric不兼容">
      <template #icon>
        <img src="/quilt.png" />
      </template>
    </list-item>
  </div>
</template>

<style scoped lang="scss">
.auto-install-list {
  position: relative;
  height: 100%;
  padding: 10px 20px 20px;
}
</style>
