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
    <div class="game-settings__announcement">
      <p class="game-settings__announcement-title">
        <InfoOutlined></InfoOutlined>
        <span>版本隔离</span>
        <span class="flex-grow"></span>
        <mdui-switch checked-icon="" style="height: 20px"></mdui-switch>
      </p>
      <p>
        使当前实例独立存放设置、存档、模组等数据，使用模组时建议启用此选项以避免不同实例间模组冲突。
        修改此选项后需自行移动设置、模组、存档等文件。
      </p>
    </div>
    <div class="game-settings__container">
      <div class="game-settings__item">
        <div class="game-settings__item-icon">
          <AnchorRound />
        </div>
        <div class="game-settings__item-title-area">
          <div class="game-settings__item-title">实例图标</div>
        </div>
        <div class="game-settings__item-btn-area">
          <img class="game-settings__version-icon" src="/fabric.svg" />
          <span class="game-settings__icon"><EditOutlined /></span>
          <span class="game-settings__icon"><CloseRound /></span>
        </div>
      </div>
      <div class="game-settings__item" style="margin-bottom: 0">
        <div class="game-settings__item-icon">
          <LinkOffRound />
        </div>
        <div class="game-settings__item-title-area">
          <div class="game-settings__item-title">实例特定的游戏设置</div>
          <div class="game-settings__item-subtitle">不影响其他实例</div>
        </div>
        <div class="game-settings__item-btn-area">
          <mdui-switch
            checked-icon=""
            :checked="versionIsolation"
            @change="versionIsolation = !versionIsolation"
          ></mdui-switch>
        </div>
      </div>
      <div v-if="!versionIsolation" class="game-settings__item" style="margin-top: 0">
        <mdui-button style="grid-area: btn-area; margin-top: 10px; margin-left: auto">
          编辑全局游戏设置
        </mdui-button>
      </div>
      <div v-else style="margin-top: 20px">
        <div class="game-settings__item">
          <div class="game-settings__item-icon">
            <CoffeeRound />
          </div>
          <div class="game-settings__item-title-area">
            <div>
              <div class="game-settings__item-title">实例 Java</div>
              <div class="game-settings__item-subtitle">自动选择合适的 Java 版本</div>
            </div>
          </div>
          <div class="game-settings__item-btn-area">
            <span class="game-settings__label">Java 21</span>
            <span class="game-settings__icon"><KeyboardArrowRightRound /></span>
          </div>
        </div>
        <div class="game-settings__item">
          <div class="game-settings__item-icon">
            <MemoryRound />
          </div>
          <div class="game-settings__item-title-area">
            <div class="game-settings__item-title">游戏内存</div>
          </div>
          <div class="game-settings__memory-settings-container">
            <div class="memory-settings__allocation">
              <span class="memory-settings__allocation-title">
                {{ autoMemory ? '最低内存分配' : '游戏内存分配' }}
              </span>
              <mdui-slider
                :value="memoryAllocation"
                :min="512"
                :max="8192"
                nolabel
                @input="memoryAllocation = Number($event.target.value)"
              ></mdui-slider>
              <span class="memory-settings__memory-value">
                <input v-model="memoryAllocation" type="number" />
                MB
              </span>
              <div class="memory-settings__auto-allocation">
                <span class="label">自动分配</span>
                <mdui-switch
                  :checked="autoMemory"
                  @change="autoMemory = !autoMemory"
                  checked-icon=""
                ></mdui-switch>
              </div>
            </div>
            <div class="memory-settings__memory-usage">
              <mdui-linear-progress value="0.63" style="--shape-corner: 2px"></mdui-linear-progress>
              <div class="memory-settings__memory-usage-value">
                设备内存已使用 20.1G / 总内存 32G
              </div>
            </div>
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

  &__announcement {
    background-color: rgb(var(--mdui-color-secondary-container));
    padding: 16px;
    border-radius: 12px;
    box-shadow: var(--mdui-elevation-level1);
    color: rgb(var(--mdui-color-on-secondary-container));
    font-size: 14px;

    &-title {
      margin-bottom: 10px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
  }

  &__announcement-title svg {
    height: 1em;
    margin-right: 3px;
  }

  &__container {
    margin-top: 20px;
    // padding: 16px;
    // background-color: rgb(var(--mdui-color-surface-container));
    // box-shadow: var(--mdui-elevation-level1);
    // border-radius: 12px;
    --light-font-color: rgba(var(--mdui-color-on-surface-variant), 0.6);
  }

  &__item {
    display: grid;
    grid-template-columns: 35px auto max-content;
    grid-template-rows: 40px min-content;
    grid-template-areas:
      'icon title btn-area'
      '. bottom-area bottom-area';
    margin: 20px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &-icon {
      height: 40px;
      align-self: center;
      grid-area: icon;
      display: flex;
      align-items: center;

      svg {
        height: 25px;
      }
    }

    &-title-area {
      align-self: center;
      grid-area: title;
    }

    &-title {
      display: flex;
      align-items: center;
      line-height: 1em;
    }

    &-subtitle {
      font-size: 12px;
      color: var(--light-font-color);
      margin-top: 3px;
      line-height: 1em;
    }

    &-btn-area {
      align-self: center;
      grid-area: btn-area;
      display: flex;
      align-items: center;
    }
  }

  &__memory-settings-container {
    align-self: start;
    grid-area: bottom-area;
  }

  &__flex-align-center {
    display: flex;
    align-items: center;
  }
}

.game-settings__item-btn-area .game-settings {
  &__icon {
    margin-left: 10px;
    cursor: pointer;

    svg {
      height: 25px;
    }
  }

  &__label {
    font-size: 12px;
    line-height: 12px;
    background-color: rgb(var(--mdui-color-tertiary-container));
    padding: 5px 8px;
    border-radius: 11px;
  }

  &__version-icon {
    margin-left: 10px;
    height: 30px;
    cursor: pointer;
  }
}

.memory-settings {
  &__allocation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 13px;
    color: rgb(var(--mdui-color-on-surface-variant));
  }

  &__auto-allocation {
    display: flex;
    align-items: center;

    .label {
      width: 55px;
      margin-left: 15px;
      font-size: 13px;
      flex-shrink: 0;
    }
  }

  &__allocation-title {
    flex-shrink: 0;
  }

  &__memory-value {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }

  &__memory-value input {
    font-size: 13px;
    width: 60px;
    height: 25px;
    border-radius: 4px;
    border: none;
    padding-left: 5px;
    margin-right: 5px;
  }

  &__memory-usage-value {
    font-size: 12px;
    color: var(--light-font-color);
    margin-top: 3px;
  }
}

mdui-switch {
  transform: scale(0.8);
}
</style>
