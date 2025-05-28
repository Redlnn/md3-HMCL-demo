<script setup lang="ts">
import 'mdui/components/switch.js'

import {
  RefreshRound,
  PlusRound,
  FolderOpenRound,
  UpdateRound,
  FileDownloadRound,
  SearchRound,
} from '@vicons/material'

import ModItem from './components/ModItem.vue'

const modsList = [
  {
    name: 'Advancements Reloaded 0.9.0',
    desc: 'advancements-reloaded-0.9.0-fabric-1.21.5, 作者：@42atomys',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
  {
    name: 'Alternate Current 1.9.0',
    desc: 'alternate-current-mc1.21.5-1.9.0, 作者：Space Walker',
  },
]
</script>

<template>
  <div class="mods-list">
    <div class="mods-list-container">
      <mod-item v-for="item in modsList" :key="item.name" :name="item.name" :desc="item.desc" />
    </div>
    <div class="operations-container">
      <div class="operations">
        <span class="operations__icon" title="刷新">
          <RefreshRound />
        </span>
        <span class="operations__icon" title="添加模组">
          <PlusRound />
        </span>
        <span class="operations__icon" title="打开模组文件夹">
          <FolderOpenRound />
        </span>
        <span class="operations__icon" title="检查模组更新">
          <UpdateRound />
        </span>
        <span class="operations__icon" title="下载模组">
          <FileDownloadRound />
        </span>
        <span class="operations__icon" title="搜索模组">
          <SearchRound />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mods-list {
  position: relative;
  height: 100%;
  padding: 10px 20px 20px;

  :deep(.list-item__icon) {
    background-color: initial;
  }
}

.mods-list-container {
  height: 100%;
  overflow: auto;
  overflow: overlay; /* Safari 支持 */
  padding-bottom: 50px;
}

.operations-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
}

.operations {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 10px;
  background-color: rgb(var(--mdui-color-surface-container));
  border-radius: 25px;
  height: 50px;
  box-shadow: var(--mdui-elevation-level3);

  .operations__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    color: rgb(var(--mdui-color-on-surface));
    cursor: pointer;

    &:hover {
      background-color: rgb(var(--mdui-color-primary-container));
    }

    svg {
      height: 20px;
    }
  }
}
</style>
