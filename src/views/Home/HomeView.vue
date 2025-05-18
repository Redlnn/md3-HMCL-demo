<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Settings16Regular, TextBulletListLtr16Filled } from '@vicons/fluent'
import { CloudDownloadOutlined, CloseRound } from '@vicons/material'

import ActionButtonGroup from './components/ActionButtonGroup.vue'
import Card from './components/Card.vue'
import PlayButton from './components/PlayButton.vue'
import UserInfo from './components/UserInfo.vue'
import VersionCard from './components/VersionCard.vue'

const showVersionList = ref(false)
const verList = ref<HTMLDivElement>()
const showAnnouncement = ref(true)

onClickOutside(verList, () => (showVersionList.value = false))

const actionButtons = [
  {
    icon: Settings16Regular,
    text: '设置',
    to: '/settings',
  },
  {
    icon: CloudDownloadOutlined,
    text: '下载游戏',
    to: '/download/game',
  },
  {
    icon: TextBulletListLtr16Filled,
    text: '版本管理',
    to: '/version_list',
  },
]

const versions = [
  {
    name: '1.21.5',
    type: '1.21.5',
    icon: '/Grass_Block_JE7_BE6.png',
    active: true,
  },
  {
    name: 'Fabric 1.12.5',
    type: 'fabric-loader-0.16.14-1.21.5',
    icon: '/fabric.svg',
    active: false,
  },
]
</script>

<template>
  <main class="main-container">
    <!-- 版本列表遮罩 -->
    <Transition name="fade">
      <div v-if="showVersionList" class="version-list__mask"></div>
    </Transition>

    <!-- 版本列表弹出框 -->
    <Transition name="slide-fade">
      <Card
        v-if="showVersionList"
        ref="verList"
        class="version-list"
        transparent
        padding="10px 0"
        :elevation="4"
      >
        <VersionCard v-for="version in versions" :key="version.name" v-bind="version" />
      </Card>
    </Transition>

    <!-- 主要内容区域 -->
    <div class="top-area">
      <div style="flex-grow: 1"></div>
      <!-- 公告卡片 -->
      <Card
        v-if="showAnnouncement"
        class="announcement announcement--tertiary-bg"
        title="开发版提示"
        padding="20px"
      >
        <CloseRound class="close-btn" @click="showAnnouncement = false" />
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
      </Card>
    </div>

    <!-- 底部操作区域 -->
    <div class="bottom-area">
      <!-- 左侧用户信息 -->
      <router-link to="/account_list">
        <UserInfo name="Glavo" type="Microsoft Account" avatar="/avatarHead3.png" />
      </router-link>

      <!-- 右侧按钮组 -->
      <div class="right-bottom-container">
        <!-- 功能按钮组 -->
        <ActionButtonGroup :items="actionButtons" class="more-btn-container" />

        <!-- 启动游戏按钮 -->
        <PlayButton version="Fabric 1.21.5" @version-select="showVersionList = true" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
// 动画相关
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

// 布局相关
.main-container {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 10px 20px 20px;
}

.top-area {
  height: calc(100% - 70px);
  display: flex;
  align-items: flex-start;
}

.bottom-area {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// 公告样式
.announcement {
  position: relative;
  max-width: 600px;
  color: rgb(var(--mdui-color-on-tertiary-container));

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  p {
    margin: 10px 0;
    font-size: 14px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: rgba(var(--mdui-color-on-tertiary-container), 0.6);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.announcement--tertiary-bg {
  background-color: rgba(var(--mdui-color-tertiary-container), 0.7);
}

// 版本列表样式
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
}

// 布局辅助
.right-bottom-container {
  display: flex;
  align-items: center;
}

.more-btn-container {
  margin-right: 20px;
}
</style>
