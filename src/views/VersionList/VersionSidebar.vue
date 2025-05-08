<script setup lang="ts">
import {
  FolderOpenRound,
  CloseRound,
  CheckRound,
  AddBoxOutlined,
  DownloadOutlined,
  MoveToInboxOutlined,
  RefreshRound,
} from '@vicons/material'
</script>

<template>
  <div class="sidebar-container">
    <div class="item-content">
      <span class="icon-container active">
        <FolderOpenRound class="icon" />
        <div class="active-icon">
          <CheckRound />
        </div>
      </span>
      <div class="content-container">
        <div class="title">官方启动器文件夹</div>
        <div class="content">/hmcl-dev/HMCL/.minecraft</div>
      </div>
      <CloseRound class="delete" />
    </div>
    <div class="item-content">
      <span class="icon-container">
        <FolderOpenRound class="icon" />
        <div class="active-icon">
          <CheckRound />
        </div>
      </span>
      <div class="content-container">
        <div class="title">测试文件夹</div>
        <div class="content">/PCL-Community/PCL2-CE/</div>
      </div>
      <CloseRound class="delete" />
    </div>
    <div class="item">
      <span class="icon-container">
        <AddBoxOutlined class="icon" />
      </span>
      <div class="title">添加游戏文件夹</div>
    </div>
    <div style="flex-grow: 1"></div>
    <div class="item">
      <span class="icon-container">
        <DownloadOutlined class="icon" />
      </span>
      <div class="title">下载新游戏</div>
    </div>
    <div class="item">
      <span class="icon-container">
        <MoveToInboxOutlined class="icon" />
      </span>
      <div class="title">导入整合包</div>
    </div>
    <div class="item">
      <span class="icon-container">
        <RefreshRound class="icon" />
      </span>
      <div class="title">刷新</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.delete {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: #000;
  flex-shrink: 0;
}

.content-container {
  width: 131px;
}

.icon-container {
  position: relative;

  &.active .active-icon {
    visibility: visible;
  }

  .active-icon {
    visibility: hidden;
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 15px;
    height: 15px;
    background-color: var(--color-primary);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    svg {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
