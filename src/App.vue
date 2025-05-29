<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { getColorFromImage } from 'mdui/functions/getColorFromImage.js'
import { setColorScheme } from 'mdui/functions/setColorScheme.js'

import MainUI from './MainUI.vue'

const ready = ref(false)
const bgUrl = ref('/2017-01-19_22.25.40.webp')

const loadBgLocal = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (file && file.type.startsWith('image/')) {
    ready.value = false
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        const image = new Image()
        image.src = e.target.result as string
        bgUrl.value = e.target.result as string
        const load = () => {
          getColorFromImage(image)
            .then((color) => setColorScheme(color))
            .then(() => (ready.value = true))
        }
        image.onload = load
      }
    }
    reader.readAsDataURL(file)
  }
}

const loadBg = (url: string) => {
  ready.value = false
  const image = new Image()
  image.src = url
  const load = () => {
    getColorFromImage(image)
      .then((color) => setColorScheme(color))
      .then(() => (ready.value = true))
  }
  image.onload = load
}

onBeforeMount(() => loadBg(bgUrl.value))
</script>

<template>
  <div class="ui-container">
    <transition name="slide-fade">
      <div v-show="!ready" class="splash__logo">
        <img src="/hmcl.png" alt="Logo" />
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!ready" class="splash">
        <div class="splash__logo-placeholder"></div>
        <div class="splash__text">
          <h1>Hello Minecraft! Launcher</h1>
          <h2>Loading... Please wait</h2>
        </div>
      </div>
    </transition>
    <MainUI :bg-url="bgUrl" />
  </div>
  <div style="margin-left: 20px">
    <span>更改背景：</span>
    <input type="file" accept="image/*" @change="loadBgLocal" />
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    transform 0.5s cubic-bezier(0.7, 0, 0.5, 1),
    opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.ui-container {
  width: 960px;
  height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: var(--mdui-elevation-level5);
  margin: 20px;
  color: rgb(var(--mdui-color-on-surface));
}

.splash {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgb(var(--mdui-color-surface));

  &__logo-placeholder {
    height: 100px;
    margin-bottom: 10px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }

  &__text h1 {
    color: rgb(var(--mdui-color-on-surface));
    font-size: 20px;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 5px;
  }

  &__text h2 {
    color: rgba(var(--mdui-color-on-surface), 0.8);
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
}

.splash-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(var(--mdui-color-surface));
  z-index: 1;
}

.splash__logo {
  position: absolute;
  top: -30px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;

  img {
    height: 100px;
  }
}
</style>
