<script lang="ts" setup>
import { Play12Filled, CaretUp24Filled } from '@vicons/fluent'
</script>

<template>
  <main class="main-container">
    <div class="developer-info">
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
    <div class="play-btn">
      <div class="play-btn-content">
        <Play12Filled />
        <div class="play-btn-text">
          <p class="launch">开始游戏</p>
          <p class="version">fabric-loader-0.16.14-1.21.511111111</p>
        </div>
      </div>
      <div class="hr"></div>
      <div class="arrow">
        <CaretUp24Filled />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.developer-info {
  padding: 10px 20px;
  background-color: var(--color-tertiary-container);
  color: var(--color-on-tertiary-container);
  border-radius: 10px;

  p {
    margin: 10px 0;
    font-size: 14px;
  }
  a {
    color: color-mix(in srgb, var(--color-on-tertiary-container), white 30%);
    text-decoration: none;
  }
}

.play-btn {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 300px;
  height: 70px;
  background-color: color-mix(in srgb, var(--color-primary-container), transparent 50%);
  color: var(--color-on-primary-container);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, var(--color-primary-container), transparent 10%);
  }

  .play-btn-content {
    display: flex;
    height: 100%;
    align-items: center;
    flex: 1;

    svg {
      height: 34px;
      width: 34px;
      margin-right: 10px;
    }

    .play-btn-text {
      max-width: 190px;
    }

    .launch {
      font-size: 18px;
      font-weight: bold;
    }

    .version {
      font-size: 14px;
      max-width: min-content;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
  }

  .hr {
    width: 1px;
    height: 30px;
    background-color: color-mix(in srgb, var(--color-on-primary-container), transparent 80%);
    margin: 0 10px;
  }

  .arrow {
    svg {
      height: 25px;
      color: var(--color-on-primary-container);
    }
  }
}
</style>
