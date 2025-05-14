<script setup lang="ts">
import { ref } from 'vue'
import { InfoOutlined, EditOutlined, CloseRound } from '@vicons/material'
import 'mdui/components/switch.js'
import 'mdui/components/button.js'

const versionIsolation = ref(false)
</script>

<template>
  <section class="game-settings">
    <div class="announcement">
      <p class="anno-title"><InfoOutlined></InfoOutlined>提示</p>
      <p>
        在“版本隔离”中选择“各版本独立”使当前版本独立存放设置、存档、模组等数据，
        使用模组时建议启用此选项以避免不同版本模组冲突。修改此选项后需自行移动设置、模组、存档等文件。
      </p>
      <div class="version-isolation">
        <span>启用版本特定的游戏设置（不影响其他游戏版本）</span>
        <div style="flex-grow: 1"></div>
        <mdui-switch
          checked-icon=""
          :checked="versionIsolation"
          @change="versionIsolation = !versionIsolation"
        ></mdui-switch>
      </div>
    </div>
    <div class="settings-container">
      <div class="settings-item version-icon">
        <div class="title">游戏图标</div>
        <div class="value">
          <span class="icon">
            <img src="/fabric.svg" />
          </span>
          <span class="icon"><EditOutlined /></span>
          <span class="icon"><CloseRound /></span>
        </div>
      </div>
      <div v-if="!versionIsolation" class="settings-item version-icon">
        <div class="title"></div>
        <div class="value">
          <mdui-button style="margin-top: 10px">编辑全局游戏设置</mdui-button>
        </div>
      </div>
      <section v-if="versionIsolation">
        <div class="settings-item version-icon">
          <div class="title">游戏图标</div>
          <div class="value">
            <span class="icon">
              <img src="/fabric.svg" />
            </span>
            <span class="icon"><EditOutlined /></span>
            <span class="icon"><CloseRound /></span>
          </div>
        </div>
        <div class="settings-item version-icon">
          <div class="title">游戏图标</div>
          <div class="value">
            <span class="icon">
              <img src="/fabric.svg" />
            </span>
            <span class="icon"><EditOutlined /></span>
            <span class="icon"><CloseRound /></span>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
.game-settings {
  position: relative;
  height: 100%;
  padding: 10px 20px 20px 0;
}

.announcement {
  background-color: rgb(var(--mdui-color-secondary-container));
  padding: 16px;
  border-radius: 12px;
  box-shadow: var(--mdui-elevation-level1);
  color: rgb(var(--mdui-color-on-secondary-container));
  font-size: 14px;

  .anno-title {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    svg {
      height: 1em;
      margin-right: 3px;
    }
  }
}

.settings-container {
  margin-top: 20px;
  padding: 16px;
  background-color: rgb(var(--mdui-color-surface-container));
  box-shadow: var(--mdui-elevation-level1);
  border-radius: 12px;

  .settings-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }

    .title {
      font-weight: bold;
    }

    .value {
      display: flex;
      align-items: center;
    }
  }
}

.version-isolation {
  background-color: initial;
  box-shadow: initial;
  margin-top: 20px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
}

.version-icon {
  .icon {
    margin-left: 10px;
    cursor: pointer;

    img {
      height: 30px;
    }

    svg {
      height: 25px;
    }
  }
}
</style>
