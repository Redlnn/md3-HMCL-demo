<script setup lang="ts">
import { CheckRound, DeveloperBoardRound, MoreVertOutlined } from '@vicons/material'
</script>

<template>
  <section class="version-list">
    <div class="version-item active">
      <div class="avatar">
        <div class="active-icon">
          <CheckRound />
        </div>
        <img src="/Grass_Block_JE7_BE6.png" alt="Avatar" />
      </div>
      <div class="version">
        <div class="name">1.21.5</div>
        <div class="type">1.21.5</div>
      </div>
      <div class="operation-item">
        <DeveloperBoardRound />
      </div>
      <div class="operation-item">
        <MoreVertOutlined />
      </div>
    </div>
    <div class="version-item">
      <div class="avatar">
        <div class="active-icon">
          <CheckRound />
        </div>
        <img src="/fabric.svg" alt="Avatar" />
      </div>
      <div class="version">
        <div class="name">fabric-loader-0.16.14-1.21.5</div>
        <div class="type">1.21.5, Fabric: 0.16.4</div>
      </div>
      <div class="operation-item">
        <DeveloperBoardRound />
      </div>
      <div class="operation-item">
        <MoreVertOutlined />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.version-list {
  position: relative;
  height: 100%;
  padding: 10px 20px 20px 0;

  .add-version-btn {
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    height: 46px;
    cursor: pointer;
    border-radius: 23px;
    background-color: color-mix(in srgb, var(--color-primary-container), transparent 30%);
    box-shadow: 0 2px 5px color-mix(in srgb, #666, transparent 80%);

    svg {
      height: 25px;
      margin-right: 10px;
    }
    span {
      height: 20px;
      line-height: 20px;
      font-size: 16px;
    }

    &:hover {
      background-color: var(--color-primary-container);
    }
  }
}

.version-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: color-mix(in srgb, var(--color-primary-container), transparent 20%);
  }

  &.active .active-icon {
    visibility: visible;
  }

  .active-icon {
    visibility: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
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

  .avatar {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background-color: var(--color-surface-container);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .version {
    flex-grow: 1;

    .name {
      font-size: 16px;
      font-weight: bold;
    }

    .type {
      font-size: 13px;
      color: #666;
    }
  }

  .operation-item {
    margin-left: 5px;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--color-surface-container-lowest);
    }

    &:hover.delete {
      color: var(--color-error);
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
