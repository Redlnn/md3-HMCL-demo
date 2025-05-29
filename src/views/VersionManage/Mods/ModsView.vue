<script setup lang="ts">
import 'mdui/components/switch.js'
import { ref } from 'vue'

import {
  RefreshRound,
  PlusRound,
  FolderOpenRound,
  UpdateRound,
  FileDownloadRound,
  SearchRound,
} from '@vicons/material'

import ModItem from './components/ModItem.vue'

const isSearch = ref(false)
const searchContent = ref('')

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
    name: 'AppleSkin 3.0.6+mc1.21.5',
    desc: 'appleskin-fabric-mc1.21.5-3.0.6, 作者: squeek502',
  },
  {
    name: 'BetterF3 14.0.0',
    desc: 'BetterF3-14.0.0-Fabric-1.21.5,作者:cominixo, TreyRuffy',
  },
  {
    name: 'Bobby 5.2.7+mc1.21.5',
    desc: 'bobby-5.2.7+mc1.21.5,作者:johni0702',
  },
  {
    name: 'Concurrent Chunk Management Engine 0.3.3+alpha.0.7+1.21.5',
    desc: 'c2me-fabric-mc1.21.5-0.3.3+alpha.0.7,作者:RelativityMC, ishland',
  },
  {
    name: 'Carpet Extra 1.4.169',
    desc: 'carpet-extra-1.21.5-1.4.169,作者:gnembon, DeadlyMC, ImUrX,2No2Name',
  },
  {
    name: 'Carpet TIS Addition 1.66.1',
    desc: 'carpet-tis-addition-v1.66.1-mc1.21.5',
  },
  {
    name: 'Caxton 0.6.0-alpha.6+1.21.5-FABRIC',
    desc: 'caxton-0.6.0-alpha.6+1.21.5-FABRIC',
  },
]
</script>

<template>
  <div class="mods-list">
    <div class="mods-list-container">
      <mod-item
        v-for="item in modsList.filter((e) =>
          e.name.toLowerCase().includes(searchContent.toLowerCase()),
        )"
        :key="item.name"
        :name="item.name"
        :desc="item.desc"
      />
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
        <span
          class="operations__icon"
          :class="[isSearch ? 'active' : undefined]"
          title="搜索模组"
          @click="isSearch = !isSearch"
        >
          <SearchRound />
        </span>
        <span class="operations__search" :class="[isSearch ? 'active' : undefined]">
          <input type="text" v-model="searchContent" />
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

    &:hover,
    &.active {
      background-color: rgb(var(--mdui-color-primary-container));
    }

    svg {
      height: 20px;
    }
  }

  .operations__search {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 35px;
    margin: 0;
    padding: 5px 0;
    width: 0;
    color: rgb(var(--mdui-color-on-surface));
    transition:
      width 0.2s ease,
      margin 0.2s ease-in-out;

    &.active {
      margin: 0 7px;
      width: 150px;
    }

    & input {
      border: 0;
      outline: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border-bottom: solid 1px rgb(var(--mdui-color-on-surface-variant-dark));
    }
  }
}
</style>
