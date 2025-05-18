<script setup lang="ts">
import { ref } from 'vue'
import {
  InfoOutlined,
  EditOutlined,
  CloseRound,
  KeyboardArrowRightRound,
  CoffeeRound,
  AnchorRound,
  LinkOffRound,
  MemoryRound,
} from '@vicons/material'
import 'mdui/components/switch.js'
import 'mdui/components/button.js'
import 'mdui/components/slider.js'
import 'mdui/components/linear-progress.js'
import 'mdui/components/checkbox.js'

const autoMemory = ref(true)
const versionIsolation = ref(true)
const memoryAllocation = ref(4096)
</script>

<template>
  <section class="game-settings">
    <div class="announcement">
      <p class="anno-title">
        <InfoOutlined></InfoOutlined>
        <span>版本隔离</span>
        <span style="flex-grow: 1"></span>
        <mdui-switch checked-icon="" style="height: 20px"></mdui-switch>
      </p>
      <p>
        使当前实例独立存放设置、存档、模组等数据，使用模组时建议启用此选项以避免不同实例间模组冲突。
        修改此选项后需自行移动设置、模组、存档等文件。
      </p>
    </div>
    <div class="settings-container">
      <div class="settings-item with-icon version-icon">
        <div class="title">
          <AnchorRound />
          实例图标
        </div>
        <div class="value">
          <span class="icon">
            <img src="/fabric.svg" />
          </span>
          <span class="icon"><EditOutlined /></span>
          <span class="icon"><CloseRound /></span>
        </div>
      </div>
      <div class="settings-item" style="margin-bottom: 0">
        <div>
          <div class="title">
            <LinkOffRound />
            实例特定的游戏设置
          </div>
          <div class="subtitle">不影响其他实例</div>
        </div>
        <div class="value">
          <mdui-switch
            checked-icon=""
            :checked="versionIsolation"
            @change="versionIsolation = !versionIsolation"
          ></mdui-switch>
        </div>
      </div>
      <div v-if="!versionIsolation" class="settings-item" style="margin-top: 0">
        <div class="title"></div>
        <div class="value">
          <mdui-button style="margin-top: 10px">编辑全局游戏设置</mdui-button>
        </div>
      </div>
      <div v-else style="margin-top: 20px">
        <div class="settings-item with-icon">
          <div>
            <div class="title">
              <CoffeeRound />
              实例 Java
            </div>
            <div class="subtitle">自动选择合适的 Java 版本</div>
          </div>
          <div class="value">
            <span class="icon label">Java 21</span>
            <span class="icon"><KeyboardArrowRightRound /></span>
          </div>
        </div>
        <div class="settings-item memory-setting__container">
          <div>
            <div class="title">
              <MemoryRound />
              游戏内存
            </div>
          </div>
          <div class="memory-setting">
            <span class="memory-setting__key">
              {{ autoMemory ? '最低内存分配' : '游戏内存分配' }}
            </span>
            <mdui-slider
              :value="memoryAllocation"
              :min="512"
              :max="8192"
              nolabel
              @input="memoryAllocation = Number($event.target.value)"
            ></mdui-slider>
            <span class="memory-value">
              <input v-model="memoryAllocation" type="number" />
              MB
            </span>
            <div style="display: flex; align-items: center">
              <span style="width: 55px; margin-left: 15px; font-size: 13px; flex-shrink: 0">
                自动分配
              </span>
              <mdui-switch
                :checked="autoMemory"
                @change="autoMemory = !autoMemory"
                checked-icon=""
              ></mdui-switch>
            </div>
          </div>
          <div class="memory-usage" style="flex-grow: 1">
            <mdui-linear-progress value="0.63" style="--shape-corner: 2px"></mdui-linear-progress>
            <div class="memory-usage__value">设备内存已使用 20.1G / 总内存 32G</div>
          </div>
        </div>
      </div>
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
    font-weight: bold;
    display: flex;
    align-items: center;

    svg {
      height: 1em;
      margin-right: 3px;
    }
  }
}

.settings-container {
  // margin-top: 20px;
  // padding: 16px;
  // background-color: rgb(var(--mdui-color-surface-container));
  // box-shadow: var(--mdui-elevation-level1);
  // border-radius: 12px;
  margin-top: 20px;
  --light-font-color: rgba(var(--mdui-color-on-surface-variant), 0.6);
}

.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  .title {
    display: flex;
    align-items: center;

    svg {
      height: 25px;
      margin-right: 5px;
    }
  }

  .subtitle {
    font-size: 12px;
    color: var(--light-font-color);
    margin-top: 3px;
  }

  .value {
    display: flex;
    align-items: center;
  }
}

.settings-item.memory-setting__container {
  display: block;

  .memory-setting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 13px;
    color: rgb(var(--mdui-color-on-surface-variant));

    .memory-setting__key {
      flex-shrink: 0;
    }

    .memory-value {
      display: flex;
      flex-shrink: 0;
      align-items: center;

      input {
        font-size: 13px;
        width: 60px;
        height: 25px;
        border-radius: 4px;
        border: none;
        padding-left: 5px;
        margin-right: 5px;
      }
    }
  }

  .memory-usage__value {
    font-size: 12px;
    color: var(--light-font-color);
    margin-top: 3px;
  }
}

.version-icon {
  .icon img {
    height: 30px;
  }
}

.with-icon {
  .icon {
    margin-left: 10px;
    cursor: pointer;

    svg {
      height: 25px;
    }
  }

  .label {
    font-size: 12px;
    line-height: 12px;
    background-color: rgb(var(--mdui-color-tertiary-container));
    padding: 5px 8px;
    border-radius: 11px;
  }
}

mdui-switch {
  transform: scale(0.8);
}
</style>
