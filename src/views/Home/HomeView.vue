<script lang="ts" setup>
import {
  Play12Filled,
  CaretUp24Filled,
  TextBulletListLtr16Filled,
  Settings16Regular,
} from '@vicons/fluent'
import { CheckRound, CloudDownloadOutlined, CloseRound } from '@vicons/material'

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const ShowVersionList = ref(false)
const verList = ref<HTMLDivElement>()
const showAnnouncement = ref(true)

onClickOutside(verList, () => (ShowVersionList.value = false))
</script>

<template>
  <main class="main-container">
    <Transition name="fade">
      <div v-if="ShowVersionList" class="version-list__mask"></div>
    </Transition>
    <Transition name="slide-fade">
      <div v-if="ShowVersionList" ref="verList" class="version-list">
        <div class="version-item active">
          <div class="version-icon">
            <div class="active-icon">
              <CheckRound />
            </div>
            <img src="/Grass_Block_JE7_BE6.png" />
          </div>
          <div class="version">
            <div class="name">1.21.5</div>
            <div class="type">1.21.5</div>
          </div>
        </div>
        <div class="version-item">
          <div class="version-icon">
            <div class="active-icon">
              <CheckRound />
            </div>
            <img src="/fabric.svg" />
          </div>
          <div class="version">
            <div class="name">Fabric 1.12.5</div>
            <div class="type">fabric-loader-0.16.14-1.21.5</div>
          </div>
        </div>
      </div>
    </Transition>
    <div class="top-area">
      <div v-if="showAnnouncement" class="announcement">
        <CloseRound class="close-btn" @click="showAnnouncement = false" />
        <p style="font-weight: bold">开发版提示</p>
        <p>
          你正在使用 HMCL
          开发版。开发版包含一些未在稳定版中包含的测试性功能，仅用于体验新功能。开发版功能未受充分验证，使用起来可能不稳定！
        </p>
        <p>
          如果你使用时遇到了问题，可以通过设置中<a href="hmcl://settings/feedback">反馈页面</a
          >提供的渠道进行反馈。欢迎关注 B 站账号
          <a href="https://space.bilibili.com/1445341">@huanghongxun</a> 以关注 HMCL
          的重要动态，或关注 <a href="https://space.bilibili.com/20314891">@Glavo</a> 以了解 HMCL
          的开发进展
        </p>
      </div>
    </div>
    <div class="bottom-area">
      <router-link to="/account" class="player-info btn-container">
        <img src="/avatarHead3.png" class="avatar" />
        <div>
          <div class="name">Glavo</div>
          <div class="type">Microsoft Account</div>
        </div>
      </router-link>
      <div class="right-bottom-container">
        <div class="more-btn-container btn-container">
          <router-link to="" class="btn">
            <Settings16Regular class="btn-icon" />
            <span class="btn-text">设置</span>
          </router-link>
          <router-link to="/download/game" class="btn">
            <CloudDownloadOutlined class="btn-icon" />
            <span class="btn-text">下载游戏</span>
          </router-link>
          <router-link to="/version_list" class="btn">
            <TextBulletListLtr16Filled class="btn-icon" />
            <span class="btn-text">版本管理</span>
          </router-link>
        </div>
        <div class="play-btn btn-container">
          <a class="play-btn-container" href="minecraft://">
            <Play12Filled class="play-icon" />
            <div class="play-btn-text">
              <p class="launch">开始游戏</p>
              <p class="version">Fabric 1.21.5</p>
            </div>
          </a>
          <div class="hr"></div>
          <div class="arrow" @click="ShowVersionList = true">
            <CaretUp24Filled />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.15s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.main-container {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 10px 20px 20px;
}

.announcement {
  padding: 10px 20px;
  max-width: 600px;
  background-color: rgba(var(--mdui-color-tertiary-container), 0.7);
  color: rgb(var(--mdui-color-on-tertiary-container));
  border-radius: 10px;
  position: relative;

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  p {
    margin: 10px 0;
    font-size: 14px;
  }
  a {
    color: rgba(var(--mdui-color-on-tertiary-container), 0.6);
    text-decoration: none;
  }
}

.top-area {
  height: calc(100% - 70px);
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
}

.bottom-area {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.version-list__mask {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--mdui-color-surface-container), 0.5);
}

.version-list {
  z-index: 2;
  position: absolute;
  bottom: 90px;
  right: 0;
  margin: 10px 20px 20px;
  background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.7);
  border-radius: 15px;
  padding: 10px 0;
  box-shadow: var(--mdui-elevation-level4);

  .version-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      background-color: rgba(var(--mdui-color-primary-container), 0.8);
    }

    &.active .active-icon {
      visibility: visible !important;
    }

    .version-icon {
      position: relative;
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: auto;
        border-radius: 50%;
      }

      .active-icon {
        visibility: hidden;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 15px;
        height: 15px;
        background-color: rgb(var(--mdui-color-primary));
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

    .version {
      margin-left: 15px;

      .name {
        font-weight: bold;
        line-height: 16px;
        font-size: 16px;
        margin-bottom: 2px;
      }

      .type {
        font-size: 12px;
        color: color-mix(in srgb, var(--color-on-surface), transparent 50%);
        line-height: 12px;
      }
    }
  }
}

.btn-container {
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: var(--mdui-elevation-level3);
  overflow: hidden;
}

.right-bottom-container {
  display: flex;
  align-items: center;
}

.more-btn-container {
  margin-right: 20px;
  height: 70px;
  background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.6);

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;

    &:hover {
      background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.8);
    }

    .btn-icon {
      height: 25px;
      margin-bottom: 3px;
    }

    .btn-text {
      color: color-mix(in srgb, var(--color-on-surface), transparent 50%);
      font-size: 13px;
    }
  }
}

.play-btn {
  padding: 0 10px 0 20px;
  width: 220px;
  height: 70px;
  background-color: rgba(var(--mdui-color-primary-container), 0.7);
  color: rgb(var(--mdui-color-on-primary-container));

  &:hover {
    background-color: rgb(var(--mdui-color-primary-container));
  }

  .play-btn-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .play-icon {
    height: 34px;
    width: 34px;
    margin-right: 10px;
  }

  .play-btn-text {
    max-width: 100px;
    flex: 1;
  }

  .launch {
    font-size: 18px;
    font-weight: bold;
  }

  .version {
    font-size: 13px;
    max-width: min-content;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }

  .hr {
    width: 1px;
    height: 30px;
    background-color: rgba(var(--mdui-color-on-primary-container), 0.2);
    margin: 0 10px;
  }

  .arrow {
    svg {
      height: 25px;
      color: rgb(var(--mdui-color-on-primary-container));
    }
  }
}

.player-info {
  padding: 19px 20px;
  margin-right: 10px;
  background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.6);

  &:hover {
    background-color: rgba(var(--mdui-color-surface-container-lowest-light), 0.8);
  }

  .avatar {
    height: 32px;
    margin-right: 13px;
  }

  .name {
    font-weight: bold;
    line-height: 18px;
    font-size: 18px;
  }

  .type {
    font-size: 12px;
    color: rgba(var(--mdui-color-on-surface), 0.5);
    line-height: 14px;
  }
}
</style>
