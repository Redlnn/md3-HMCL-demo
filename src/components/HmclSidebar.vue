<template>
  <nav class="sidebar"><slot></slot></nav>
</template>

<style lang="scss">
.sidebar {
  display: inline-block;
  width: 250px;
  height: 100%;
  padding-right: 20px;

  .hr {
    height: 20px;
  }

  .item-content {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 26px;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-container);
      color: var(--color-on-primary-container);
    }

    .icon-container {
      display: flex;
      justify-content: center;
      width: 30px;
      margin-right: 1rem;
    }

    .icon {
      height: 32px;
    }

    .title {
      font-size: 14px;
      line-height: 18px;
    }

    .content {
      font-size: 12px;
      color: color-mix(in srgb, var(--color-on-primary-container), transparent 50%);
      line-height: 14px;
      max-width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
  }

  .item {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 26px;
    height: 52px;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-container);
      color: var(--color-on-primary-container);
    }

    .icon-container {
      display: flex;
      justify-content: center;
      width: 30px;
      margin-right: 1rem;
    }

    .icon {
      height: 20px;
    }

    .title {
      font-size: 14px;
    }
  }
}
</style>
