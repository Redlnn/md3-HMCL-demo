<template>
  <nav class="sidebar">
    <div class="sidebar-container">
      <slot></slot>
    </div>
  </nav>
</template>

<style lang="scss">
.sidebar {
  display: inline-block;
  width: 270px;
  height: 100%;
  padding: 10px 20px 20px 20px;

  .sidebar-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .hr {
    height: 20px;
  }
}
</style>
